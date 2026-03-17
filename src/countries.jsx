import { use, useState } from "react";
import Country from './Country'
import "./countries.css"
const Countries = ({countriesPromise}) => {
    const countriesData= use(countriesPromise);
    const countries=countriesData.countries;
    const [VisitedCountry,setVisitedCountry]=useState([]);
    const [visitedFlag, setVisitedFlag]=useState([])
    const handlevisited=(country)=>{
      const nervisitedcountry=[...VisitedCountry ,country];
      setVisitedCountry(nervisitedcountry)
    }
    const HandlevisitedFlag=(flag)=>{
      const newvisit=[...visitedFlag, flag]
      setVisitedFlag(newvisit)
      console.log(flag);
      
    }
    return (
        <div style={{textAlign : 'left'}}>
          <h2 style={{textAlign : 'left', padding:'20px'}}>In the countries: {countries.length}</h2>
          <h3>Total country visited : {VisitedCountry.length}</h3>
          <ol>
            {
              VisitedCountry.map(country=> <li
                key={country.cca3.cca3}
              >{country.name.common}</li>)
            }
          </ol>
          <div className="visited-flag">
            {
              visitedFlag.map((flag ,index)=> <img key={index} src={flag}></img>)
            }
          </div>
          <div className="countries">
            {
            countries.map(country=><Country 
              key={country.cca3.cca3}
              country={country}
              handlevisited={handlevisited}
              HandlevisitedFlag={HandlevisitedFlag}
              ></Country>)
          }
          </div>
        </div>
    );
};

export default Countries;