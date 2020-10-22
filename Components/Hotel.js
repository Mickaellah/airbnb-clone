import React from "react";

export default function Hotel({ photo, superHost, type, beds, rating, title}) {
    return (
        <div className="card">
            <img src={photo} alt={title}/>
            <div className="container">
                {superHost ? <button className="host">Super Host</button> : ''}
                <p>{type} <span>{beds}</span></p>
                <p><span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" fill="red" viewBox="0 0 24 24" width="24"><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg></span>  {rating}</p>
            </div>
            <p>{title}</p>
        </div>
    )
}