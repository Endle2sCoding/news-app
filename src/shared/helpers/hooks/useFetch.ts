// import { useEffect, useState } from "react";
// import { NewsItemType } from "../api/apiNews";

// export const useFetch = (fetchFunction: () => void, params?: {
//   page_number: number;
//   page_size: number;
//   category?: string | null;
//   keywords: string;
// }) => {


//   const [data, setData] = useState<NewsItemType[] | string[] | void>([]);
//   const [isLoading, setIsLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         setIsLoading(true);
//         const result = await fetchFunction(params);
//         setData(result);
//       } catch (error: unknown) {
//         let message = 'Unknown Error';
//         if (error instanceof Error) {
//           message = error.message;
//         }
//         setError(message);
//       } finally {
//         setIsLoading(false);
//       }
//     })();
//   }, [params, fetchFunction]);

//   return { data, isLoading, error };
// };