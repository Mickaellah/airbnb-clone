import React from "react";

function Form(props) {

    const handleChange = (e) => {
        console.log("Select an element");
    }
    return (
        <>
            <select className="location" onChange={handleChange}>
                <option>Choose a location</option>
                <option value="helsinki">Helsinki</option>
                <option value="turku">Turku</option>
                <option value="vaasa">Vaasa</option>
                <option value="oulu">Oulu</option>
            </select>
            <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder}/>
        </>
    )
}

const container = document.createElement('div');
document.body.appendChild(container);

export default Form

