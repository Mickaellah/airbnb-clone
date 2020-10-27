import React, { useState } from "react";
import Stays from "../stays.json";
import Hotel from "../Components/Hotel";
import Form from "../Components/Form";


export function HotelComponents() {
    const [ location, setLocation ] = useState('');
    const [ guest, setGuest ] = useState('');
    const [ data, setData ] = useState([]);
    const [ show, setShow ] = useState(false);

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
            <form className="form" onSubmit={searchData}>
                <Form 
                    onChange={filteredLocation}
                    inputChange={filterNumberOfGuest}
                    type="number"
                    placeholder="Add guests"
                    name="guests"
                    id="guests"
                    value={location}
                    guests={guest}
                    show={show}
                />
            </form>
            <div className="card-list">
                {(location || guest) ? mapData : filteredStays}
            </div>
        </>
    )
}