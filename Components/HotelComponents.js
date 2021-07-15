import React, { useState } from "react";
import styled from 'styled-components';

import stays from "../stays.json";
import Hotel from "../Components/Hotel";
import Form from "../Components/Form";
import Modal from "../Components/Modal";

export function HotelComponents() {
    const [ location, setLocation ] = useState('');
    const [ guest, setGuest ] = useState('');
    const [ data, setData ] = useState([]);
    const [ show, setShow ] = useState(false);

    function openModal() {
        setShow(!show);
    }

    function closeModal() {
        setShow(false);
    }

    function searchData(e) {
        e.preventDefault();
        setData(stays);
    }

    const mapData = stays.map(stay => { 
        return <Hotel key={stay.title} {...stay} />
    });

    const filteredStays = data.map(stay => { 
        return <Hotel key={stay.title} {...stay}/>
    })

    return (
        <div>
            <form className="form" onSubmit={searchData}>
                <Form 
                    openModal={openModal}   
                />
            </form>
            {show ? <Modal 
                        show={show}
                        closeModal={closeModal}
                        value={location}
                        guests={guest}
                        openModal={openModal}
                        placeholder="Add guests"
                        setData={setData}
                        setLocation={setLocation}
                        setGuest={setGuest}
                     /> : ""}
            <div className="card-list">
                {(location || guest) ? filteredStays : mapData}
            </div>
        </div>
    )
}