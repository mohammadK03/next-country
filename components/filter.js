import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Filter = (props) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [sortBy, setSortBy] = useState([]);
    const router = useRouter();
    const { query } = router;

    const handleSearch = ({ term, option, sortBy }) => {
        // e.preventDefault();
        term ? (query.term = term) : query.term;
        option ? (query.option = option) : query.option;
        sortBy ? (query.sortBy = sortBy) : query.sortBy;

        router.push({
            pathname: "/search",
            query
        });
    };

    const onSearchTerm = (e) => {
        (e.key === "Enter") && (
            e.preventDefault(),
            handleSearch({ term: e.target.value })
        )
    }

    const onOption = (e) => {
        handleSearch({ option: e.target.value })
    }

    const onSort = (e) => {
        handleSearch({ sortBy: e.target.value })
    }


    return (
        <form className="flex md:flex-row flex-col md:items-center items-start justify-between pb-12 pt-[3.5rem]"
        onSubmit={handleSearch}>
            <div className="relative px-[3.5rem] bg-light rounded-md shadow-sm md:w-[35%] w-full h-[3.5rem]">
                <input className="w-full h-full text-sm outline-none bg-transparent"
                    type="text"
                    onKeyDown={(e) => onSearchTerm(e)}
                    placeholder="Search for a country..."
                />
                <img className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 gray-svg"
                src="/icons/search.svg" 
                alt="" />
            </div>
            <div className="flex flex-row items-center space-x-3">
                <h3>Sort:</h3>
                {/* <span className={`bg-light px-3 h-[3.5rem] rounded-md flex items-center justify-center cursor-pointer hover:scale-110 duration-200 transition-all ${sortBy.includes('population') ? 'bg-blue-100' : ''}`}
                onClick={() => onSort('population')}> Population </span>
                <span className={`bg-light px-3 h-[3.5rem] rounded-md flex items-center justify-center cursor-pointer hover:scale-110 duration-200 transition-all ${sortBy.includes('country-name') ? 'bg-blue-100' : ''}`}
                onClick={() => onSort('country-name')}> Country Name </span> */}
                <select
                className="w-[10rem] h-[3.5rem] rounded-md shadow-sm outline-none bg-light mt-[3rem] md:mt-0"
                    onChange={e => onSort(e)}
                >
                    <option value="">Sort by options</option>
                    <option value="ascending-population"> Ascending population </option>
                    <option value="descending-population"> Descending population </option>
                    <option value="country-name"> Country name </option>
                </select>

                <h3>filter:</h3>
                <select
                className="w-[10rem] h-[3.5rem] rounded-md shadow-sm outline-none bg-light mt-[3rem] md:mt-0"
                    value={selectedOption}
                    onChange={e => onOption(e)}
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