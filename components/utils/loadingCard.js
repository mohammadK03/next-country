import countryCss from '../country.module.css'

const LoadingCard = () => {
    return (
        <div className="unset">
            <div className="w-[19rem] h-[26rem] rounded-md bg-light cursor-pointer hover:scale-[1.12] duration-200 transition-all">
                <div className="w-full h-[45%] bg-gray-300/80 animate-pulse"></div>
                <div className="flex flex-col p-5 space-y-1">
                    <h1 className="text-lg font-bold mb-2.5 w-32 h-6 rounded-md bg-gray-300/80 animate-pulse"></h1>

                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Population: </h4>
                        <p className="w-20 h-6 rounded-md bg-gray-300/80 ml-2 animate-pulse"></p>
                    </div>
                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Region: </h4>
                        <p className="w-20 h-6 rounded-md bg-gray-300/80 ml-2 animate-pulse"></p>
                    </div>
                    <div className="flex flex-row items-center">
                        <h4 className={countryCss.attribute}> Capital: </h4>
                        <p className="w-20 h-6 rounded-md bg-gray-300/80 ml-2 animate-pulse"></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LoadingCard;