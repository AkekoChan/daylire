import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https:///${endpoint}`,
    headers: {
      Accept: "application/json",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      // const response = await axios.request(options);
      const response = await fetch(options.url, {
        method: options.method,
      });
      console.log(response);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
