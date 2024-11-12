import { useEffect, useState } from "react";

interface Props {
  url: RequestInfo | URL;
  options?: RequestInit;
}

export function useFetch({ url, options }: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return { isLoading, data };
}
