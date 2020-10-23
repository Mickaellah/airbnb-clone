import React, { useState } from "react";
import Stays from "../stays.json";
import Hotel from "../Components/Hotel";
import Modal from "./Modal";
// import Form from "../Components/Form";


export function HotelComponents() {
    const [ location, setLocation ] = useState('');
    const [ guest, setGuest ] = useState('');
    const [ data, setData ] = useState([]);
    const [ show, setShow ] = useState(false);

    function showModal() {
        setShow(!show);
    }

    function searchData(e) {
        e.preventDefault();
        setData(Stays);
    }

    function filterNumberOfGuest(e) {
        setGuest(e.target.value);
        const filteredGuest = Stays.filter(guest => {
            return guest.maxGuests.toString() === e.target.value;
        })
        setData(filteredGuest);
        console.log(filteredGuest);
    }

    function filteredLocation(e) {
        setLocation(e.target.value);
        const filteredCity = Stays.filter(stay => { return stay.city.toLowerCase() === e.target.value
        });
        setData(filteredCity);
    }

    const mapData = data.map(stay => { 
        return <Hotel key={stay.title} {...stay}/>
    })

    const filteredStays = Stays.map(stay => { 
        return <Hotel key={stay.title} {...stay} />
    });

    return (
        <>
            <button onClick={showModal}>Show modal</button>
            <Modal onClose={showModal} show={show} onChange={filteredLocation} inputChange={filterNumberOfGuest} value={location} guests={guest}/>
            <div className="card-list">
                {(location || guest) ? mapData : filteredStays}
            </div>
        </>
    )
}