import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoaing] = useState(true);

    useEffect(() => {
        const abortCont = new AbortController();

        fetch(url, { signal: abortCont.signal })
            .then(resp => {
                if(!resp.ok) {
                    throw Error('there is an error!');
                }
                return resp.json();
            })
            .then((data) => { 
                setData(data);
                setIsLoaing(false);
            })
            .catch(error => {
                if(error.name == 'AbortError') {
                    console.log('abort error')
                } else {
                    console.log(error);
                }
            })

        return () => abortCont.abort();
    }, [url]);

    return {
        data,
        isLoading
    }
}

export default useFetch;