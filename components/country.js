import Image from "next/image";
import Link from "next/link";
import countryCss from './country.module.css';

const Country = (props) => {
    return (
        <Link className="unset" 
        href={`/country/${props.country.name.official ? props.country.name.official : props.country.name}`}>
            <div className="w-[20rem] mx-auto h-[26rem] rounded-lg bg-light cursor-pointer hover:scale-[1.12] duration-200 transition-all">
                <img className="w-full rounded-t-lg h-[50%]"
                src={props.country.flags.png}></img>
                <div className="flex flex-col p-5 space-y-1">
                    <h1 className="text-lg font-bold mb-2.5"> {props.country.name.common ? props.country.name.common : props.country.name} </h1>

                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Population: </h4>
                        <p className={countryCss.attributeValue}> {props.country.population} </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Region: </h4>
                        <p className={countryCss.attributeValue}> {props.country.region} </p>
                    </div>
                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Capital: </h4>
                        <p className={countryCss.attributeValue}> {props.country.capital} </p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
 
export default Country;