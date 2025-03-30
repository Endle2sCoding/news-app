import { useEffect, useState } from "react";

interface FetchFunction<P, T> {
  (params?: P): Promise<T>;
}
interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}
export const useFetch = <P, T>(fetchFunction: FetchFunction<P, T>, params?: P): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const result = await fetchFunction(params);
        setData(result);
      } catch (error: unknown) {
        setError(error as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [params, fetchFunction]);

  return { data, isLoading, error };
};