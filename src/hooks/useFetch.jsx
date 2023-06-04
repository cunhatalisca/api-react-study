import axios from "axios";
import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState()

  useEffect(()=> {
    axios.get(url)
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((err) =>{
        setError(err)
      })
      .finally(() =>{
        setFetching(false)
      })
  }, [])

  return { data, fetching, error };
}