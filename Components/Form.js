import React from "react";
import styled from "styled-components";

import {fonts} from '../GlobalStyles/fonts';
import Search from '../img/search-icon.svg';

const ButtonContainer = styled('div')`
     button {
         font-family: "Mulish Regular";

         :last-child {
            transform: translateY(3px);
         }
     }
`;

const LocationButton = styled("button")`
    background-color: white;
    font-size: 14px;
    color: #333333;
    line-height: 18px;
    padding-block-start: 19px;
    padding-block-end: 18px;
    padding-inline: 16px;
    border: none;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
`;

const GuestsButton = styled("button")`
    font-size: 14px;
    line-height: 18px;
    padding-block-start: 19px;
    padding-block-end: 18px;
    padding-inline: 16px;
    border: none;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    background-color: white;
    color: #BDBDBD;
`;

const EndIconButton = styled("button")`
    padding-inline: 19px;
    padding-block-start: 19px;
    padding-block-end: 16px;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    border: none;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);
    color: black;
    cursor: pointer;
    background-color: white;
`;

function Form(props) {
    const {
        openModal, 
    } = props;

    return (
        <ButtonContainer>
            <LocationButton type="button" onClick={openModal} className="location">Helsinki, Finland</LocationButton>
            <GuestsButton type="button" onClick={openModal} className="guests">Add guests</GuestsButton>
            <EndIconButton type="button" className="endIcon" onClick={openModal}>
                <img src={Search} alt="Search icon" />
            </EndIconButton>
        </ButtonContainer>
    )
}

export default Form

