import React from "react";

function Form(props) {
    return (
        <>
            <select className="location" value={props.value} onChange={props.onChange}>
                <option>Choose a location</option>
                <option value="helsinki">Helsinki</option>
                <option value="turku">Turku</option>
                <option value="vaasa">Vaasa</option>
                <option value="oulu">Oulu</option>
            </select>
            <input type={props.type} name={props.name} onChange={props.inputChange} value={props.guests} id={props.id} placeholder={props.placeholder}/>
        </>
    )
}

export default Form

