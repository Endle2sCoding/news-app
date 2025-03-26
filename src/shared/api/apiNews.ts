import axios from "axios";

const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL;
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export interface NewsItemType {
  id: string;
  title?: string;
  url?: string;
  published: string;
  author?: string;
  category?: string[];
  description?: string;
  image?: string;
  language?: string;
}
export type ResponseCategoriesType = 'regional' | 'technology' | 'lifestyle' | 'business' | 'general' | 'programming' | 'science' | 'entertainment' | 'world' | 'sports' | 'finance' | 'academia' | 'politics' | 'health' | 'opinion' | 'food' | 'game' | 'fashion' | 'academic' | 'crap' | 'travel' | 'culture' | 'economy' | 'environment' | 'art' | 'music' | 'notsure' | 'CS' | 'education' | 'redundant' | 'television' | 'commodity' | 'movie' | 'entrepreneur' | 'review' | 'auto' | 'energy' | 'celebrity' | 'medical' | 'gadgets' | 'design' | 'EE' | 'security' | 'mobile' | 'estate' |
  'funny';

export type CategoriesType = "All" | ResponseCategoriesType;

export const getNews = async (
  { page_number = 1, page_size = 10, category, keywords }:
    { page_number: number, page_size: number, category: ResponseCategoriesType | null; keywords: string; }
) => {
  try {
    const response = await axios.get(`${BASE_URL}search`, {
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

  }
};
export const getCategories = async () => {
  try {
    const response = await axios.get(`${BASE_URL}available/categories`, {
      params: {
        apiKey: API_KEY,

      }
    });
    return response.data;
  } catch (error) {
    console.log(error);

  }
};