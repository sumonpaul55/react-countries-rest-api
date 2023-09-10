/* eslint-disable react/prop-types */

import { useState } from "react";
import "./countries.css"
function Country({country ,handleVisittedCountries}) {
    // console.log(handleVisittedCountries)
    // console.log(country)
    const nameStyle ={
        boder: "1px solid gray",
        padding: "15px",
        margin: "15px",
        background: "skyblue",
        borderRadius: "3px"
        }
        const [visitted, setVisitted]= useState(false);

        const handleVisitted = ()=> {
            setVisitted(!visitted)
        }
    const {name , flags,population,area,cca3} = country;
    return (
        <div style={nameStyle}>
            <h3>Name: {name?.common}</h3>
            <img src={flags.png} alt={name?.common} width="100"/>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=>handleVisittedCountries(country)}>Mark As Visitted</button>
            <button onClick={handleVisitted}>{visitted ? "Visitted": "Gonig"}</button>
        <p>{visitted ? "I have visitted the Country": "I want to visitted the country"}</p>
        </div>
    )
}

export default Country
