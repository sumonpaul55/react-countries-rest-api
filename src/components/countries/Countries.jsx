/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import Country from "./country";

function Countries() {
    const [countries, setCountries] = useState([]);
    const [visittedCountries, setVisittedCountries]= useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const handleVisittedCountries =country=>{
      const totalVisittedCountry = [...visittedCountries,country ]
      setVisittedCountries(totalVisittedCountry)
    }
    return (
        <section>
            <div>
                <h2>Total Visitted Country {visittedCountries.length}</h2>
                <ul>
                    {
                        visittedCountries.map((visittedcountry)=>(
                            <li key={visittedcountry.cca2}>{visittedcountry.name.common}</li>
                        ))
                        
                    }
                </ul>
            </div>
          <div className="country-container">
            {
                countries.map((counrty)=>(
                    <Country key={counrty.cca2} country={counrty} handleVisittedCountries={handleVisittedCountries}></Country>
                ))
            }
          </div>
        </section>
    )
}

export default Countries
