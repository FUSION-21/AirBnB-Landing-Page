import React from "react";

export default function Location(props){
    return(
        <div>
            <img src={props.image} alt="location" className="loc-img" ></img>
            <div className="loc-details">
                <b>{props.name}</b>
                <p><img src="./image/star.png" alt="rating" width={15}></img>{props.rating}</p>
                <p>{props.distance}</p>
                <p></p>
                <p>{props.date}</p>
                <p></p>
                <p><b>{props.cost}</b> night</p>
            </div>
        </div>
    )
}