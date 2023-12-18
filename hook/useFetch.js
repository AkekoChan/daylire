import { useState, useEffect } from "react";

const useFetch = (endpoint, method) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: method,
    url: `https://projectdev.alwaysdata.net/loufok/api/${endpoint}`,
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await fetch(options.url, {
        method: options.method,
      });
      const data = await response.json();

      setData(data);

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
