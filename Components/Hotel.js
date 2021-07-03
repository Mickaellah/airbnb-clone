import React from "react";

export default function Hotel({ photo, superHost, type, beds, rating, title}) {
    return (
        <div className="card">
            <img src={photo} alt={title}/>
            <div className={superHost ? 'full-detail-container' : 'detail-container'}>
                {superHost ? <p className="host">Super Host</p> : ''}
                <p className={superHost ? 'superhost' : 'type'}>{type} <span>{beds ? beds + " " + 'beds' : ''}</span></p>
                <div className="rate">
                    <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="16" fill="#EB5757" viewBox="0 0 24 24" width="16"><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg></span> 
                    <span> {rating}</span>
                </div>
            </div>
            <p className="title">{title}</p>
        </div>
    )
}