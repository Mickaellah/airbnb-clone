import React from "react";
import Form from "../Components/Form";
import Search from '../img/search-icon.svg';
import location from '../img/location.svg';

function Modal(props) {
  const { 
    show, 
    closeModal, 
    onChange, 
    inputChange, 
    value, 
    guests, 
    type,
    name,
    placeholder,
    id,
    locations
  } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          <button className="close_button" onClick={closeModal}>X</button>
        </div>
        <form>
          {/* <select className="location" value={value} onChange={onChange}>
            <option>Choose a location</option>
            <option value="helsinki">Helsinki</option>
            <option value="turku"> Turku</option>
            <option value="vaasa"> Vaasa</option>
            <option value="oulu"> Oulu</option>
          </select> */}
          <div>
            <p className="location">
              <span>Location</span>
              <span>Helsinki, Finland</span>
            </p>
            {locations.map((loc, index) => {
              return (
                <div>
                  <img src={location} alt="Location icon" />
                  <button>{loc}, Finland</button>
                </div>
              )
            })}
          </div>
          <input type={type} name={name} onChange={inputChange} value={guests} id={id} placeholder={placeholder}/>
          <button type="button" className="endIcon">
            <img src={Search} alt="Search icon" />
          </button>
        </form>
      </div>
    </div>
  );
};
export default Modal;