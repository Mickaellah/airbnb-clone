import React from "react";
import Form from "../Components/Form";
const Modal = (props) => {
  const { show, closeModal } = props;
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          <p>Edit your search</p>
          {/* <button type="button" className="close_button" onClick={closeModal}>X</button> */}
        </div>
        <Form 
            onChange={props.onChange}
            inputChange={props.inputChange}
            type="number"
            placeholder="Add guests"
            name="guests"
            id="guests"
            value={props.value}
            guests={props.guests}
            show={props.show}
        />
      </div>
    </div>
  );
};
export default Modal;