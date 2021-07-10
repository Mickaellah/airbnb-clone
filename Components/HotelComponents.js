import React, { useState } from "react";
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

    function filterNumberOfGuest(e) {
        setGuest(e.target.value);
        const filteredGuest = stays.filter(guest => {
            return guest.maxGuests.toString() === e.target.value;
        })
        setData(filteredGuest);
    }

    // const filterPlaces = (e) => {
    //     const placeFilter = e.target.value.toLowerCase();
    //     const numberFilter = e.target.value;

    //     const filteredPlaces = stays.filter(place => placeFilter ? place.city.toLowerCase() === e.target.value : true && (numberFilter ? place.maxGuests.toString() === e.target.value : true));

    //     console.log(filteredPlaces);

    //     setData(filteredPlaces);
    // }

    const mapData = stays.map(stay => { 
        return <Hotel key={stay.title} {...stay} />
    });

    const filteredStays = data.map(stay => { 
        return <Hotel key={stay.title} {...stay}/>
    })

    return (
        <>
            <form className="form" onSubmit={searchData}>
                <Form 
                    openModal={openModal}   
                />
            </form>
            {show ? <Modal 
                        show={show}
                        closeModal={closeModal}
                        inputChange={filterNumberOfGuest}
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
        </>
    )
}