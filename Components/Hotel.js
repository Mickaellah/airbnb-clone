import React from "react";

export default function Hotel({ photo, superHost, type, beds, rating, title}) {
    return (
        <div className="card">
            <img src={photo} alt={title}/>
            <div className="container">
                {superHost ? <button className="host">Super Host</button> : ''}
                <p>{type} <span>{beds}</span></p>
                <p>✨  {rating}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}