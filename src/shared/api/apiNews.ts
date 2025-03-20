import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;
export interface NewsItesmType {
  id?: string;
  title?: string;
  url?: string;
  published: string;
  author?: string;
  category?: string[];
  description?: string;
  image?: string;
  language?: string;
}

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`, {
      params: {
        apiKey: API_KEY
      }
    });
    console.log("getNews res", response);
    console.log("getNews rs.data", response.data);

    return response.data;
  } catch (error) {
    console.log(error);

  }
};