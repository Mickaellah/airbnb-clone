import React, { useState } from "react";
import Stays from "../stays.json";

function Form(props) {
    const [ location, setLocation ] = useState('');

    const handleChange = (e) => {
        console.log("Select an element");
        e.preventDefault();
        setLocation(e.target.value);
        const filteredCityV = Stays.filter(stay => stay.city.includes('V'));
        console.log(filteredCityV);
        const filteredCityO = Stays.filter(stay => stay.city.includes('O'));
        console.log(filteredCityO);
        const filteredCityT = Stays.filter(stay => stay.city.includes('T'));
        console.log(filteredCityT);
    }
    return (
        <>
            <select className="location" value={location} onChange={handleChange}>
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

