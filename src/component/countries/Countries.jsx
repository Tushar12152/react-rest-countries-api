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

    const [visitedCountry,setVisitedCountry]=useState([])
    const [visitedflag,setVisitedflag]=useState([])

    const handleVisitedCountry=country=>{
        
       
        const newVisitedCountries=[...visitedCountry,country.name.common];
        setVisitedCountry(newVisitedCountries)
        
    }
     const handleVisitedFlag=flag=>{
        const flagList=[...visitedflag,flag.flags.png]
          setVisitedflag(flagList)
     }

    return (

        <>
            <h1 className="text-center font-semibold text-3xl">countries:{rest.length}</h1>
            <div>
                 <h1>visited Flags:</h1>
                
                    {
                        visitedflag.map((flag,idx)=> <img key={idx}className="w-10 mb-2" src={flag} alt="" />)
                    }
                 
            </div>
            <div>
                <h1>visited country: <ul className="list-decimal list-disc">
                    {
                       visitedCountry.map(item=><li key={'5'}>{item}</li>) 
                    }
                </ul>


                </h1>
               
            </div>
            <div className="grid grid-cols-3 gap-6 w-[90%] mx-auto ">
         

         {
            rest.map(country=><Country key={country.name?.common} country={country} handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlag={handleVisitedFlag}></Country>)
         }
    </div>
        </>
       
    );
};

export default Countries;