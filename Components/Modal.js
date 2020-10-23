import React from "react";
import Form from "./Form";
import { filterNumberOfGuest } from "./HotelComponents";
import { filteredLocation } from "./HotelComponents";
import { searchData } from "./HotelComponents";

export default class Modal extends React.Component {

    render() {
        if(!this.props.show){
            return null;
        }

        return (
            <div className="Modal">
                <form onSubmit={searchData}>
                    <Form 
                        onChange={this.props.onChange}
                        inputChange={this.props.inputChange}
                        type="number"
                        placeholder="Add guests"
                        name="guests"
                        id="guests"
                        value={this.props.value}
                        guests={this.props.guests}
                    />
                    <button type="submit" className="endIcon">Search</button>
                </form>
            </div>
        );
    }
}