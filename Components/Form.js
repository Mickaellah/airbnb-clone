import React from "react";
// import Location from '../img/location.svg';
import Search from '../img/search-icon.svg';

function Form(props) {
    const {
        openModal, 
    } = props;

    return (
        <>
            <button type="button" onClick={openModal} className="location">Helsinki, Finland</button>
            <button type="button" onClick={openModal} className="guests">Add guests</button>
            <button type="button" className="endIcon" onClick={openModal}>
                <img src={Search} alt="Search icon" />
            </button>
        </>
    )
}

export default Form

