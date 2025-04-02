import { NewsItemType } from "@/pages/MainPage/ui/MainPage";
import axios from "axios";

export const getNews = async () => {
  try {
    const res = await axios.get<{ data: { news: NewsItemType[]; }; }>(`${import.meta.env.VITE_NEWS_BASE_API_URL}latest-news`, {
      params: {
        apiKey: import.meta.env.VITE_NEWS_API_KEY
      }
    });
    console.log(res);
    console.log(res.data);

    return res.data;
  } catch (error) {
    console.log(error);

  }
};