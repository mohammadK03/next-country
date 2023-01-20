import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';
import Countries from "@/components/countries";
import Filter from "@/components/filter";

const Search = () => {
    const router = useRouter();
    const name = router.query.term;
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);

    useEffect(() => {
        const url = name ? `https://restcountries.com/v2/name/${name}` : `https://restcountries.com/v2/all`;
        searchCountries(url);
    },
    [name]);

    const searchCountries = async (url) => {
        let res = await axios.get(url);
        setCountries(res.data);
        setFilteredCountries(res.data);
    }

    useEffect(() => {
        (router.query.option && countries) && filterByRegion(router.query.option);
    }, [router.query.option, countries])

    // useEffect(() => {
    //     sortCountries();
    // }, [router.query.sortBy])

    const filterByRegion = (option) => {
        const filteredCountries = countries.filter(country => {
            console.log(country.region === option)
            return country.region === option;
        })

        setFilteredCountries(filteredCountries);
    }

    // const sortCountries = () => {
    //     if (router.query.sortBy) {
    //         const sorted = filteredCountries.sort((a, b) => {
    //             return a.population - b.population;
    //         })

    //         setFilteredCountries(sorted);

    //         console.log('dcniwejnc')
    //     }
    // }

    return (
        <div className="w-full h-full bg-light-main pb-[4rem]">
            <div className="w-[85%] mx-auto">
                <Filter />
                {
                    filteredCountries && 
                        <Countries
                        countries={filteredCountries}></Countries>
                }
            </div>
        </div>
    );
}
 
export default Search;