import React, {useState} from "react";
import styled from 'styled-components';

import stays from '../stays.json';

import Search from '../img/white-search-icon.svg';
import Location from '../img/location.svg';
import Plus from '../img/plus.svg';
import Minus from '../img/minus.svg';

const Form = styled("form")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const DropDownContainer = styled("div")`
`;
const DropDownHeader = styled("div")`
  color: #333333;
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;
  padding-block-start: 12px;
  padding-block-end: 10px;
  padding-inline: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  span {
    font-size: 9px;
    line-height: 11px;
    font-weight: 800;
    text-transform: uppercase;
  }

  p {
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
    margin: 0;
  }
`;
const DropDownListContainer = styled("nav")``;
const DropDownList = styled("ul")`
  padding: 0;
`;
const ListContainer = styled("div")`
  display: flex;
  flex-direction: row;

  :first-child {
    margin-block-start: 41px;
  }

  :not(:first-child) {
    margin-block-start: 36px;
  }
`;
const ListItem = styled("li")`
  list-style: none;
  text-align: center;
  vertical-align: center;
  margin-inline-start: 10px;
  color: #4F4F4F;
  font-size: 14px;
  line-height: 18px;
  cursor: pointer;
`;

const Label = styled("label")`
  width: auto;
  padding-block-start: 12px;
  padding-block-end: 11px;
  padding-inline: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: fit-content;

  span {
    font-weight: 800;
    font-size: 9px;
    line-height: 11px;
    text-transform: uppercase;
    color: #333333;
    margin-block-start: 4px;
  }

  input {
    border: none;
    font-size: 14px;
    line-height: 18px;
    color: #BDBDBD;
    outline: none;
  }
`;

const ButtonContainer = styled("div")`
  padding-block-start: 4px;
  padding-block-end: 6px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  border: none;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  color: black;
  cursor: pointer;
  background-color: white;
  height: fit-content;
`;

const Button = styled("button")`
  display: flex;
  flex-direction: row;
  background-color: #EB5757;
  color: #ffffff;
  border: none;
  border-radius: 16px;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
  padding-block-start: 15px;
  padding-block-end: 16px;
  padding-inline-start: 27px;
  padding-inline-end: 25px;
  margin-inline-start: auto;
  margin-inline-end: auto;

  span {
    margin-inline-start: 11px;
    vertical-align: center;
    text-align: center;
  }
`;

const CounterContainer = styled("div")`
  margin-inline-start: 16px;

  p {
    color: #333333;
    font-size: 14px;
    line-height: 18px;
    margin: 0;

    :first-child {
      margin-block-start: 48px;
    }

    :last-child {
      margin-block-start: 52px;
    }
    
  }

  small {
    color: #BDBDBD;
    font-size: 14px;
    line-height: 18px;
    margin: 0;
  }
`;

const CounterButtonContainer = styled("div")`
  display: flex;
  flex-direction: row;
  margin-block-start: 12px;

  button {
    background-color: #ffffff;
    border: 1px solid #828282;
    border-radius: 4px;
  }

  span {
    margin-inline-start: 15px;
    margin-inline-end: 16px;
  }
`;

function Modal(props) {
  const { 
    show, 
    closeModal, 
    inputChange, 
    guests, 
    type,
    name,
    placeholder,
    setData,
    setLocation,
    setGuest
  } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [isOpen, setIsOpen] = useState(false);
  const [isInputFieldClicked, setIsInputFieldClicked] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Helsinki");
  const [countForAdults, setCountForAdults] = useState(0);
  const [count, setCount] = useState(0);

  const options = ["Helsinki", "Turku", "Oulu", "Vaasa"];

  function optionSelected(e) {
    setSelectedOption(e.target.dataset.value);
    setIsOpen(false);
  }

  function filteredPlace(e) {
    e.preventDefault();
    const locationValue = e.target.dataset.value;
    setLocation(locationValue);
    const number = countForAdults + count;
    setGuest(number);

    const filteredPlaces = stays.filter(place => (locationValue ? place.city.toLowerCase() === locationValue.toLowerCase() : true) && (number ? place.maxGuests.toString() === number.toString() : true));

    setData(filteredPlaces);
    console.log(filteredPlaces);
  }



  const toggling = () => setIsOpen(!isOpen);

  const handleInput = () => setIsInputFieldClicked(!isInputFieldClicked);

  const incrementAdultNumber = () => {
    setCountForAdults(countForAdults + 1);
  }

  const decrementAdultNumber = () => {
    if (countForAdults > 0) {
      setCountForAdults(countForAdults - 1);
    }
  }

  const incrementChildrenNumber = () => {
    setCount(count + 1);
  }

  const decrementChildrenNumber = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          <button className="close_button" onClick={closeModal}>X</button>
        </div>
        <Form  onClick={filteredPlace}>
          <DropDownContainer>
            <DropDownHeader onClick={toggling}>
              <span>Location</span>
              <p>{selectedOption}, Finland</p>
            </DropDownHeader>
            {isOpen 
              && (
                <DropDownListContainer>
                  <DropDownList>
                    {options.map((option, index) => (
                      <ListContainer key={index}>
                        <img className="location-icon" src={Location} alt="Location icon" />
                        <ListItem data-value={option} onClick={optionSelected}>
                            {option}, Finland
                        </ListItem>
                      </ListContainer>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
          </DropDownContainer>
          <div>
            <Label onClick={handleInput}>
              <span>
                  Guests
              </span>
              <input type={type} name={name} onChange={inputChange} value={guests} placeholder={placeholder}/>
            </Label>

            {isInputFieldClicked && (
              <CounterContainer>
                <div>
                  <p>Adults</p>
                  <small>Ages 13 or above</small>
                  <CounterButtonContainer>
                    <button type="button" onClick={decrementAdultNumber}>
                      <img src={Minus} alt="Minus icon" />
                    </button>
                    <span>{countForAdults}</span>
                    <button type="button" onClick={incrementAdultNumber}>
                      <img src={Plus} alt="Plus icon" />
                    </button>
                  </CounterButtonContainer>
                </div>
                <div>
                  <p>Children</p>
                  <small>Ages 2 - 12</small>
                  <CounterButtonContainer>
                    <button type="button" onClick={decrementChildrenNumber}>
                      <img src={Minus} alt="Minus icon" />
                    </button>
                    <span>{count}</span>
                    <button type="button" onClick={incrementChildrenNumber}>
                    <img src={Plus} alt="Plus icon" />
                    </button>
                  </CounterButtonContainer>
                </div>
              </CounterContainer>
            )}
          </div>
          <ButtonContainer>
            <Button type="submit">
              <img src={Search} alt="Search icon" />
              <span>Search</span>
            </Button>
          </ButtonContainer>
        </Form>
      </div>
    </div>
  );
};
export default Modal;