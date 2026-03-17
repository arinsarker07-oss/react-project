import React, { useState } from 'react';
import "./country.css"
const Country = ({country ,handlevisited, HandlevisitedFlag}) => {
    // console.log(country);
    const [visited, setVisited]=useState(false)
    const handebtn=()=>{
       setVisited(!visited)
       handlevisited(country);
    }
    return (
        <div className={`country ${visited &&" country-visited"}`}>
            <img src={country?.flags?.flags?.png} alt="" />
            <h3>Name: {country.name.common}</h3>
            <p >population :{country.population.population}</p>
            <p>area: {country.area.area} {country.area.area>300000 ? "Big country" : "small country"}</p>
            <button onClick={handebtn}>{visited ? "visited" : "not visited"}</button>
            <button style={{marginLeft: "10px"}} onClick={()=>{HandlevisitedFlag(country?.flags?.flags?.png)}}>visited flag</button>
        </div>
    );
};

export default Country;