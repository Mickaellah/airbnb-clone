import React from "react";
import styled from "styled-components";

import {fonts} from '../GlobalStyles/fonts';

const Container = styled('div')`
    ${fonts}
    margin-block-end: 32px;
    img {
        height: 269px;
        border-radius: 24px;
        object-fit: cover;
    }
    div {
        p {
            font-family: "Montserrat Bold"
        }
        div {
            :first-child {
                p {
                    font-family: "Montserrat Medium"
                }
            }

            :last-child {
                span {
                    font-family: "Montserrat Medium"
                }
            }
        }
    }

    p {
        font-family: "Montserrat Semi Bold"
    }
`;

const Host = styled("p")`
    border-radius: 12px;
    padding-inline: 9px;
    background-color: white;
    margin-top: 8px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
    line-height: 15px;
    border: 1px solid #4F4F4F;
    color: #4F4F4F;
    box-sizing: border-box;
    padding-block-start: 7px;
    padding-block-end: 6px;
    width: fit-content;
`;

const Rating = styled("div")`
    display: flex;
    margin-block-start: 10px;
    align-self: right;
    justify-self: right;

    span:nth-of-type(1) {
        margin-inline-end: 8px;
        margin-block-start: 5px;
    }

    span:nth-of-type(2) {
        margin-block-start: 5px;
        color: #4F4F4F;
        font-size: 14px;
        font-weight: 500;
        line-height: 17px;
    }
`;

const Title = styled("p")`
    margin: 0;
    color: #333333;
    font-size: 16px;
    line-height: 20px;
    font-weight: 600;
`;

export default function Hotel({ photo, superHost, type, beds, rating, title}) {
    return (
        <Container>
            <img src={photo} alt={title}/>
            <div className={superHost ? 'full-detail-container' : 'detail-container'}>
                {superHost ? <Host>Super Host</Host> : ''}
                <div>
                    <p className={superHost ? 'superhost' : 'type'}>{type} <span>{beds ? beds + " " + 'beds' : ''}</span></p>
                </div>
                <Rating>
                    <span><svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="16" fill="#EB5757" viewBox="0 0 24 24" width="16"><g><rect fill="none" height="24" width="24" x="0"/><polygon points="14.43,10 12,2 9.57,10 2,10 8.18,14.41 5.83,22 12,17.31 18.18,22 15.83,14.41 22,10"/></g></svg></span> 
                    <span> {rating}</span>
                </Rating>
            </div>
            <Title>{title}</Title>
        </Container>
    )
}