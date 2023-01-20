import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import axios from "axios";
import Link from "next/link";
import countryCss from './country.module.css';

const Country = () => {
    const router = useRouter();
    const name = router.query.name;
    const [country, setCountry] = useState(null);
    const [loading, setLoading] = useState(true);


    async function fetchData() {
        setLoading(true);
        let response = [];
        try {
            response = await axios.get(`https://restcountries.com/v2/alpha/${name}`);
            if (response.status === 200) {
                setCountry(response.data);
                setLoading(false);
            } else setLoading(false);
        } catch (error) {
            response = await axios.get(`https://restcountries.com/v2/name/${name}`);
            if (response.status === 200) {
                setCountry(response.data[0]);
                setLoading(false);
            }   else setLoading(false)
        }
    }

    useEffect(() => {
        name && fetchData();
    }, [name]);


    return (
        <div className="flex flex-col w-[85%] mx-auto h-full pb-[4rem]">
            <button className="p-2.5 rounded-md shadow-lg w-[8rem] text-sm bg-light mt-10 flex flex-row items-center justify-center"
            onClick={() => router.back()}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                    <path fillRule="evenodd" d="M7.28 7.72a.75.75 0 010 1.06l-2.47 2.47H21a.75.75 0 010 1.5H4.81l2.47 2.47a.75.75 0 11-1.06 1.06l-3.75-3.75a.75.75 0 010-1.06l3.75-3.75a.75.75 0 011.06 0z" clipRule="evenodd" />
                </svg>

                Back
            </button>

            {
                loading ? 
                <div className="flex lg:flex-row flex-col items-center space-x-10 w-full h-[25rem] lg:mt-[5rem] mt-[3.5rem]">
                        <div className="lg:basis-1/2 h-full bg-gray-300/80 animate-pulse">
                        </div>

                        <div className="lg:basis-1/2 flex flex-col self-center">
                            <h1 className="w-32 h-6 bg-gray-300/80 animate-pulse"></h1>

                            <ul className="flex flex-col flex-wrap w-full mt-10 h-[10rem] space-y-1">
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Native Name: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Population: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Region: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Sub Region: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Sub Region: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Top Level Domain: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Currencies: </h4>
                                    <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 > Languages: </h4>
                                    <span className="flex flex-row flex-wrap">
                                        { [1,2,3].map((i) => {
                                            return <p className="w-20 h-6 bg-gray-300/80 animate-pulse ml-1.5 rounded-md"></p>
                                        }) }
                                    </span>
                                </li>
                            </ul>

                            <div className="flex flex-row items-center flex-wrap mt-10 space-x-2">
                                <h4 className={countryCss.attribute}>Border Countries:</h4>
                                {
                                    [1,2,4].map((i) => {
                                        return <span className='py-1 px-2.5 shadow-sm text-center border border-gray-100 rounded-sm'></span>
                                    })
                                }
                            </div>
                        </div>

                    </div> :
                country && 
                    <div className="flex lg:flex-row flex-col lg:items-center items-start lg:space-x-10 w-full h-[25rem] lg:mt-[5rem] mt-[3.5rem]">
                        <div className="basis-1/2 h-full">
                            <img className="w-full h-full"
                            src={country.flags.png}
                            alt="" />
                        </div>

                        <div className="basis-1/2 flex flex-col lg:self-center mt-[2.5rem] lg:mt-0">
                            <h1 className={countryCss.name}> { country.name } </h1>

                            <ul className="flex flex-col lg:flex-wrap w-full space-y-1 mt-10 lg:h-[10rem]">
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Native Name: </h4>
                                    <p className={countryCss.attributeValue}> { country.nativeName } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Population: </h4>
                                    <p className={countryCss.attributeValue}> { country.population } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Region: </h4>
                                    <p className={countryCss.attributeValue}> { country.region } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Sub Region: </h4>
                                    <p className={countryCss.attributeValue}> { country.subregion } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Sub Region: </h4>
                                    <p className={countryCss.attributeValue}> { country.subregion } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Top Level Domain: </h4>
                                    <p className={countryCss.attributeValue}> { country.topLevelDomain } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Currencies: </h4>
                                    <p className={countryCss.attributeValue}> { country.currencies[0].name } </p>
                                </li>
                                <li className="flex flex-row items-center">
                                    <h4 className={countryCss.attribute}> Languages: </h4>
                                    <span className="flex flex-row flex-wrap">
                                        { country.languages.map((language, i) => {
                                            return <p className={countryCss.attributeValue}> {language.name} </p>
                                        }) }
                                    </span>
                                </li>
                            </ul>

                            <div className="flex lg:flex-row flex-col lg:items-center items-start mt-10 lg:space-x-2">
                                <h4 className={countryCss.attribute}>Border Countries:</h4>
                                <div className="flex flex-row flex-wrap items-center mt-1 lg:mt-0">
                                    {
                                        country.borders && country.borders.map((border, i) => {
                                            return <Link className={`py-1 px-2.5 mr-2 mt-2 shadow-sm text-center bg-light border border-gray-100 rounded-sm ${countryCss.attributeValue}`}
                                                    href={`/country/${border}`}> {border} </Link>
                                        })
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
            }
        </div>
    );
}
 
export default Country;