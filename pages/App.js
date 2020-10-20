import React from "react";
import HotelComponents from "../Components/HotelComponents";
import Form from "../Components/Form";
import Button from "../Components/Button";

function App() {

    return (
        <>
            <form className="form" onSubmit={(e) => {e.preventDefault(); console.log(e.target.value)}}>
                <Form 
                    type="number"
                    placeholder="Add guests"
                    name="guests"
                    id="guests"
                />
                <Button 
                    type="submit"
                    icon="endIcon"
                    className="endIcon"
                />
            </form>
            <HotelComponents />
        </>
    )
}

export default App