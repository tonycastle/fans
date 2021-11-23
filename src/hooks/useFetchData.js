import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = (dataUrl, options) => {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    const source = axios.CancelToken.source();

    const fetchData = async (url, options) => {
      setIsLoading(true);
      const payload = { ...options, cancelToken: source.token };
      try {
        const response = await axios.post(url, payload);
        if (isMounted) {
          setData(response.data);
          setFetchError(null);
        }
      } catch (err) {
        if (isMounted) {
          setFetchError(err.message);
          setData([]);
        }
      } finally {
        isMounted && setIsLoading(false);
      }
    };

    fetchData(dataUrl, options);

    return () => {
      isMounted = false;
      source.cancel();
    };
  }, [dataUrl, options]);

  return [data, fetchError, isLoading];
};
