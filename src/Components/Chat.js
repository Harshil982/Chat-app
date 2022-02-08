import React, { useState, useEffect } from "react";
import queryString from 'query-string'
import io from 'socket.io-client'
import './Styles/Chat.css'
import InfoBar from './InfoBar.js'
import Input from "./Input";
import Messages from "./Messages";
import TextContainer from "./TextContainer";

let socket;

const Chat = (props) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [users, setUsers] = useState('');
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    const ENDPOINT = 'http://localhost:5000/'
    useEffect(() => {
        const { name, room } = queryString.parse(window.location.search)
        console.log(name, room);

        socket = io(ENDPOINT)

        setName(name)
        setRoom(room)
        console.log(socket);

        socket.emit('join', { name, room }, (error) => {
            if (error) {
                alert(error);
            }
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }

    }, [ENDPOINT, window.location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            // console.log(message)
            setMessages([...messages, message]);
        })
        socket.on("roomData", ({ users }) => {
            setUsers(users);
        });
    }, [messages]);

    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    // console.log(message,messages)

    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} />
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            <TextContainer users={users} />
        </div>
    )
}

export default Chat;