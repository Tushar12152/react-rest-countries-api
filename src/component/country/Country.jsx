

const Country = ({country}) => {
    console.log(country)
    const {name,flags,area,population,region}=country;
    return (
        <div className="border-2 border-gray-400 rounded-xl mb-2 w-[50%]  mx-auto bg-slate-400 ">
            <h3 className="text-xl font-semibold p-4">Name:{name.common}</h3>
            <img className="p-10 mx-auto" src={flags. png} alt="" />
            <div className="border-2 border-yellow-200 w-[50%] mx-auto p-16 m-10">
            <p className="font-semibold text-xl">Area:{area} Squre k.m</p>
            <h2 className="font-semibold text-xl">Population:{population}</h2>
            <h2 className="font-semibold text-xl">Region: {region}</h2>
            </div>

        </div>
    );
};

export default Country;