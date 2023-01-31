import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from 'axios';
import Countries from "@/components/countries";
import Filter from "@/components/filter";
import { findDOMNode } from "react-dom";

const Search = () => {
    const router = useRouter();
    const [countries, setCountries] = useState(null);
    const [filteredCountries, setFilteredCountries] = useState(null);
    const { term, option, sortBy } = router.query;

    useEffect(() => {
            const url = term ? `https://restcountries.com/v2/name/${term}` : `https://restcountries.com/v2/all`;
            searchCountries(url);
        },
    [term]);

    const searchCountries = async (url) => {
        let res = await axios.get(url);
        setCountries(res.data);
    }

    useEffect(() => {
        countries && filter();
    }, [term, option, sortBy, countries])

    const filter = () => {
        console.log('filter')
        console.log(term, 'term')
        console.log(countries, 'c')

        let filteredArray = countries;

        if (option) {
            filteredArray = filteredArray.filter((country, i) => {
                return country.region === option;
            })

            console.log(filteredArray, "fa")
        }
        if (sortBy) {
            if (sortBy === "ascending-population") {
                filteredArray = filteredArray.sort((a, b) => {
                    return a.population - b.population;
                })
                console.log(filteredArray, 'sort by changed')
            } 
            if (sortBy === "descending-population") {
                filteredArray = filteredArray.sort((a, b) => {
                    return b.population - a.population;
                })
            } 
            if (sortBy === "country-name") {
                filteredArray = filteredArray.sort((a, b) => {
                    return a.name.localeCompare(b.name) ;
                })
            }
        }

        setFilteredCountries(filteredArray);
    }

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