import { useEffect, useState } from "react";

interface Props {
  url: RequestInfo | URL;
  options?: RequestInit;
}

export function useFetch<T>({ url, options }: Props) {
  const [isFetching, setisFetching] = useState<boolean>(true);
  const [data, setData] = useState<T | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      if (!isFetching) {
        setisFetching(true);
      }
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setData(json as T);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setisFetching(false);
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, []);

  return { isFetching, data };
}
