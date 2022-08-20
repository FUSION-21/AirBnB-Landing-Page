import React from "react";

export default function Stays(props){
    return(
        <div>
            <div className="stays-container">
                <img src={props.image} alt="logo-stays" className="stays-svg"  width={35} ></img>
                <p className="stays-text">{props.text}</p>
            </div>
        </div>
    )
}