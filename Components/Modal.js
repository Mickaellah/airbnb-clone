import React, {useState} from "react";
import styled from 'styled-components';

import Search from '../img/white-search-icon.svg';
import location from '../img/location.svg';

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

function Modal(props) {
  const { 
    show, 
    closeModal, 
    inputChange, 
    guests, 
    type,
    name,
    placeholder,
  } = props;

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Helsinki");

  const options = ["Helsinki", "Turku", "Oulu", "Vaasa"];

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = value => () => {
    setSelectedOption(value);
    setIsOpen(false);
};

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <div>
          <button className="close_button" onClick={closeModal}>X</button>
        </div>
        <Form>
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
                        <img className="location-icon" src={location} alt="Location icon" />
                        <ListItem onClick={onOptionClicked(option)}>
                            {option}, Finland
                        </ListItem>
                      </ListContainer>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
          </DropDownContainer>
          <Label>
            <span>
                Guests
            </span>
            <input type={type} name={name} onChange={inputChange} value={guests} placeholder={placeholder}/>
          </Label>
          <ButtonContainer>
            <Button type="button">
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