import React from "react";
import './Styles/infoBar.css';
import onlineIcon from "../Icons/onlineIcon.png"
import closeIcon from "../Icons/closeIcon.png"

const InfoBar = ({ room }) =>(
    <div className="infoBar">
        <div className="leftInnerContainer">
            <img className="onlineIcon" src={onlineIcon} alt="online" />
            <h3>{room}</h3>
        </div>
        <div className="RightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close" /></a>
        </div>
    </div>
)

export default InfoBar;