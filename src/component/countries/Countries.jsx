import { useEffect, useState } from "react";
import Country from "../country/Country";

const Countries = () => {
    const [rest,setRest]=useState([])
    useEffect(()=>{
        // fetch('https://restcountries.com/v3.1/all')
        // .then(res=>res.json())
        // .then(data=>setRest(data))
  const Data= async()=>{
     const res=await fetch('https://restcountries.com/v3.1/all')
     const data=await res.json()
     setRest(data)
  }
  Data()  
    },[])
    
    return (
        <div>
             <h1 className="text-center font-semibold text-3xl">countries:{rest.length}</h1>

             {
                rest.map(country=><Country key={country.name?.common} country={country}></Country>)
             }
        </div>
    );
};

export default Countries;