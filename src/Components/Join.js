import React,{useState} from "react";
import {Link} from 'react-router-dom'
import './Styles/Join.css'

function Join(){
    const [name,setName] = useState('')
    const [room,setRoom] = useState('')

    return(
        <>
            <div className="outer-container">
                <div className="Inner-container">
                    <h1 className="heading">JOIN ROOM</h1>
                    <div><input placeholder="Enter your name" className="Join-Input" type="text" onChange={(e) => setName(e.target.value)} /></div>
                    <div><input placeholder="Enter Room Name" className="Join-Input mt-20" type="text" onChange={(e) => setRoom(e.target.value)} /></div>
                    <Link onClick={e => (!name || !room) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                        <button className="submit-button mt-20" type="submit">Sign In</button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Join;