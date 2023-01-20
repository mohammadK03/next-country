import Countries from "@/components/countries";
import Filter from "@/components/filter";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function Home(props) {
  const [countries, setCountries] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getCountries();


  }, [])

  const getCountries = async () => {
    setLoading(true);
    const res = await axios.get('https://restcountries.com/v2/all');
    if (res.status === 200) {
      setCountries(res.data);
      setLoading(false);
    } else {
      alert('something went wrong!');
      setLoading(false);
    }
  }

  return (
    <div className="w-full h-full bg-light-main pb-[5rem]">
      <div className="md:w-[85%] w-[90%] mx-auto">
        <Filter />

        {
          <Countries 
          countries={countries}
          loading={loading}></Countries>
        }
      </div>
    </div>
  )
}

// export async function getStaticProps() {
//   try {
//     const res = await axios.get('https://restcountries.com/v2/all');
//     console.log(res + "hi")
//   } catch (error) {
//     console.log(error + "errro")
//   }


//   return {
//     props: {
//       data: null
//     }
//   }
// }