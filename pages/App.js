import React from "react";
import HotelComponents from "../Components/HotelComponents";
import Form from "../Components/Form";

export default function App() {
    return (
        <>
            <form class="form">
                <Form 
                    type="text"
                    placeholder="Helsinki, Finland"
                    name="location"
                    id="location"
                />
                <Form 
                    type="text"
                    placeholder="Add guests"
                    name="guests"
                    id="guests"
                />
            </form>
            <HotelComponents />
        </>
    )
}