import React from "react";
// import Location from '../img/location.svg';
import Search from '../img/searc-icon.svg';

function Form(props) {
    const {openModal} = props;
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
            <button type="button" className="endIcon" onClick={openModal}>
                <img src={Search} alt="Search icon" />
            </button>
        </>
    )
}

export default Form

