import { useState } from "react";


const Country = ({country,handleVisitedCountry,handleVisitedFlag}) => {
    const[visited,setVisited]=useState(false)
    const handleClick=()=>{
        setVisited(!visited)
    }

    const {name,flags,area,population,region,cca3}=country;
    return (
        <div className={`border-2 rounded-xl mb-2    ${visited?'bg-[violet]':'bg-slate-400' }`}>
            <h3 className="text-xl font-semibold p-4">Name:{name.common}</h3>

                <button className="btn mr-20 ml-5 mb-5"  onClick={()=>handleVisitedCountry(country)}>add visited</button>

                <button className="btn ml-2"  onClick={()=>handleVisitedFlag(country)}>add visited Flag</button>

            <button onClick={handleClick} className={`btn bg-[#e2d259] mx-10 ${visited&& 'bg-[#0b16e2] text-white'}`}>{visited? 'visited':"going"}</button>
               {
                visited?"yes i visited":'i want to visit'
               }
            <img className="p-10 mx-auto w-96" src={flags. png} alt="" />
           

            <div className="border-2 border-yellow-200 w-[70%] mx-auto rounded-xl p-5 ">
            <p className="font-semibold text-xl">Area:{area} Squre k.m</p>
            <h2 className="font-semibold text-xl">Population:{population}</h2>
            <h2 className="font-semibold text-xl">Region: {region}</h2>
            <p>{cca3}</p>
            </div>
            

        </div>
    );
};

export default Country;