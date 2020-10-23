import React from "react";
import Form from "./Form";

export default class Modal extends React.Component {

    render() {
        if(!this.props.show){
            return null;
        }

        return (
            <div className="Modal">
                <form onSubmit={this.props.onClick}>
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