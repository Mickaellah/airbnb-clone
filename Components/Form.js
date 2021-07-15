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


function Form(props) {
    const {
        openModal, 
    } = props;

    return (
        <ButtonContainer>
            <button type="button" onClick={openModal} className="location">Helsinki, Finland</button>
            <button type="button" onClick={openModal} className="guests">Add guests</button>
            <button type="button" className="endIcon" onClick={openModal}>
                <img src={Search} alt="Search icon" />
            </button>
        </ButtonContainer>
    )
}

export default Form

