import React, { useState } from "react";
import styled from 'styled-components';

import stays from "../stays.json";
import Hotel from "../Components/Hotel";
import Form from "../Components/Form";
import Modal from "../Components/Modal";

const FormStyled = styled("form")`
    display: flex;
    justify-content: flex-end;
    transform: translateY(-350%);

    @media (max-width: 900px) {
        display: flex;
        justify-content: center;
        transform: translateY(-276%);
    }
`;

const CardList = styled("div")`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 34px;
    column-gap: 34px;
    margin-block-start: -66px;

    @media (max-width: 900px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        margin-block-start: -64px;
    }

    @media (max-width: 600px) {
        display: grid;
        grid-template-columns: auto;
    }
`;

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
            <FormStyled onSubmit={searchData}>
                <Form 
                    openModal={openModal}   
                />
            </FormStyled>
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
            <CardList>
                {(location || guest) ? filteredStays : mapData}
            </CardList>
        </div>
    )
}