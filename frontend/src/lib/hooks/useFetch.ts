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
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  });

  return { isLoading, data };
}
