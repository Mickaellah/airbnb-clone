import React from "react";

export default function Form(props) {
    return (
        <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
    )
}