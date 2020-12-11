import React from "react";
// import Location from '../img/location.svg';

function Form(props) {
    return (
        <>
            <select className="location" value={props.value} onClick={props.openModal} onChange={props.onChange}>
                <option>Choose a location</option>
                <option value="helsinki"> Helsinki</option>
                <option value="turku"> Turku</option>
                <option value="vaasa"> Vaasa</option>
                <option value="oulu"> Oulu</option>
            </select>
            <input type={props.type} name={props.name} onClick={props.click} onChange={props.inputChange} value={props.guests} id={props.id} placeholder={props.placeholder}/>
            <button type="submit" className="endIcon">Search</button>
        </>
    )
}

export default Form

