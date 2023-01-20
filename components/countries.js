import Country from "./country";
import LoadingCard from "./utils/loadingCard";

const Countries = (props) => {
    
    return (
        <div className="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:gap-12 flex flex-col justify-center space-y-[2.5rem] md:space-y-0">
            {
                props.loading ? 
                [1,2,3,4,5,6,7,8,9,10].map(i => {
                    return <LoadingCard key={i} />
                }) :
                props.countries.map((country, i) => {
                    return <Country
                            country={country}
                            key={i}></Country>
                })
            }
        </div>
    );
}
 
export default Countries;