import React, { useState } from "react";
import Stays from "../stays.json";
import Hotel from "../Components/Hotel";
import Form from "../Components/Form";


export default function HotelComponents() {
    const [ location, setLocation ] = useState('');
    const [data, setData ] = useState([]);

    function searchData(e) {
        e.preventDefault();
        setData(Stays);
    }

    const filteredCity = data.filter(stay => stay.city == location);

    const mapData = Stays.map(stay => {
        return <Hotel key={stay.title} {...stay} />
    })

    const filteredStays = filteredCity.map(stay => {
        return <Hotel key={stay.title} {...stay}/>
    })

    const showData = (location == "") ? mapData : filteredStays;
    return (
        <>
            <form className="form" onSubmit={searchData}>
                <Form 
                    onChange={(e) => setLocation(e.target.value)}
                    type="number"
                    placeholder="Add guests"
                    name="guests"
                    id="guests"
                    value={location}
                />
                <button type="submit" className="endIcon">Search</button>
            </form>
            <div className="card-list">
                {showData}
            </div>
        </>
    )
}