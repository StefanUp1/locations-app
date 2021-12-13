import { useState, useEffect, useRef } from 'react';

const useFetchData = <T>(fetchMethod: () => Promise<T>) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const mounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try {
        const result = await fetchMethod();
        // This prevents errors from trying to set state on unmounted component
        if (!mounted.current) return;
        setData(result);
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();

    return () => {
      mounted.current = false;
    };
  }, [fetchMethod]);

  return { data, isLoading, isError };
};

export default useFetchData;
