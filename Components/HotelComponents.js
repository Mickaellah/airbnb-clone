import React, { useState } from "react";
import Stays from "../stays.json";
import Hotel from "../Components/Hotel";


export default function HotelComponents() {
    return (
        <div className="card-list">
            {
                Stays.map(stay => (
                    <Hotel key={stay.id} {...stay}/>
                ))
            }
        </div>
    )
}