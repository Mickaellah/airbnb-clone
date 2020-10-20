import React from "react";
import HotelComponents from "../Components/HotelComponents";
import Form from "../Components/Form";
import Button from "../Components/Button";

function App() {

    return (
        <>
            <form className="form">
                <Form 
                    type="text"
                    placeholder="Add guests"
                    name="guests"
                    id="guests"
                />
                <Button 
                    type="button"
                    icon="endIcon"
                    className="endIcon"
                />
            </form>
            <HotelComponents />
        </>
    )
}

export default App