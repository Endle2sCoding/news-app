import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export interface NewsItemType {
  id: string;
  title: string;
  url: string;
  published: string;
  author: string;
  category: string[];
  description: string;
  image: string;
  language: string;
}
interface NewsApiResponse {
  news: NewsItemType[];
  page: number;
  status: string;
}
interface CategoriesApiResponse {
  categories: string[];
  description: string;
  status: string;
}

interface ParamsType {
  page_number: number,
  page_size: number,
  category: string | null;
  keywords: string;
}

export const getNews = async (
  params?: ParamsType
): Promise<NewsApiResponse> => {
  const {
    page_number = 1,
    page_size = 10,
    category,
    keywords
  } = params || {};

  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}search`, {
      params: {
        apiKey: API_KEY,
        page_number,
        page_size,
        category,
        keywords
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};

export const getLatestNews = async (): Promise<NewsApiResponse> => {
  try {
    const response = await axios.get<NewsApiResponse>(`${BASE_URL}latest-news`, {
      params: {
        apiKey: API_KEY,
      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { news: [], page: 1, status: "error" };
  }
};

export const getCategories = async (): Promise<CategoriesApiResponse> => {
  try {
    const response = await axios.get<CategoriesApiResponse>(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,

      }
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return { categories: [], description: "", status: "error" };

  }
};