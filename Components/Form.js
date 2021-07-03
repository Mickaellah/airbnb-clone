import React from "react";
// import Location from '../img/location.svg';
import Search from '../img/search-icon.svg';

function Form(props) {
    const {
        openModal, 
        onChange, 
        inputChange, 
        value, 
        type, 
        name, 
        placeholder, 
        guests, 
        id
    } = props;

    return (
        <>
            <select className="location" value={value} onChange={onChange}>
                <option>Choose a location</option>
                <option value="helsinki"> Helsinki</option>
                <option value="turku"> Turku</option>
                <option value="vaasa"> Vaasa</option>
                <option value="oulu"> Oulu</option>
            </select>
            <input type={type} name={name} onChange={inputChange} value={guests} id={id} placeholder={placeholder}/>
            <button type="button" className="endIcon" onClick={openModal}>
                <img src={Search} alt="Search icon" />
            </button>
        </>
    )
}

export default Form

