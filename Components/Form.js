import React from "react";

function Form(props) {

    return (
        <>
            <select className="location" value={props.value} onChange={props.onChange}>
                <option>Choose a location</option>
                <option value="Helsinki">Helsinki</option>
                <option value="Turku">Turku</option>
                <option value="Vaasa">Vaasa</option>
                <option value="Oulu">Oulu</option>
            </select>
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
        </>
    )
}

export default Form

