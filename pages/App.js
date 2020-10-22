import React, { useState } from "react";
import HotelComponents from "../Components/HotelComponents";
import Modal from "../Components/Modal";

class App extends React.Component {
    state = {
        show: false
    };

    showModal = e => {
        this.setState({
            show: !this.state.show
        });
    }


render(){
    return (
        <>
            <button onClick={e => {
                this.showModal();
            }}>Show Modal</button>
            <Modal onClose={this.showModal} show={this.state.show}>Message in modal</Modal>
            <HotelComponents />
        </>
    )
}
}

export default App