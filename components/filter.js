import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Filter = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [sortBy, setSortBy] = useState([]);
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/search?term=${searchTerm}&option=${selectedOption}`);
    };

    const onSubmitOption = (e) => {
        router.push(`/search?term=${searchTerm}&option=${e.target.value}`);
    }

    const onSortBy = (sort) => {
        sortBy.includes(sort) ? 
            sortBy.splice(sortBy.indexOf(sort), 1) :
            sortBy.push(sort);
        setSortBy(sortBy);
        router.push(`/search?term${searchTerm}&option=${selectedOption}&sortBy=${sortBy.join(",")}`)
    }

    useEffect(() => {
        if (router.query.term || router.query.option) {
            const term = router.query.term;
            const option = router.query.option;
            term && setSearchTerm(term);
            option && setSelectedOption(option);
        }
    }, [router.query.term, router.query.option])


    return (
        <form className="flex md:flex-row flex-col md:items-center items-start justify-between pb-12 pt-[3.5rem]"
        onSubmit={handleSearch}>
            <div className="relative px-[3.5rem] bg-light rounded-md shadow-sm md:w-[35%] w-full h-[3.5rem]">
                <input className="w-full h-full text-sm outline-none bg-transparent"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search for a country..."
                />
                <img className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 gray-svg"
                src="/icons/search.svg" 
                alt="" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                {/* <h3>Sort:</h3>
                <span className={`bg-light px-3 h-[3.5rem] rounded-md flex items-center justify-center cursor-pointer hover:scale-110 duration-200 transition-all ${sortBy.includes('population') ? 'bg-blue-100' : ''}`}
                onClick={() => onSortBy('population')}> Population </span>
                <span className={`bg-light px-3 h-[3.5rem] rounded-md flex items-center justify-center cursor-pointer hover:scale-110 duration-200 transition-all ${sortBy.includes('country-name') ? 'bg-blue-100' : ''}`}
                onClick={() => onSortBy('country-name')}> Country Name </span> */}
                <select
                className="w-[10rem] h-[3.5rem] rounded-md shadow-sm outline-none bg-light mt-[3rem] md:mt-0"
                    value={selectedOption}
                    onChange={e => onSubmitOption(e)}
                >
                    <option value="">Filter by Region</option>
                    <option value="Africa">Africa</option>
                    <option value="America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </form>
    );
}
 
export default Filter;