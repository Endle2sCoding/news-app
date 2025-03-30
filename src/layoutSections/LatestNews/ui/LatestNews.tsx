import s from "./LatestNews.module.scss";
import { getLatestNews, NewsItemType } from "@/shared/api/apiNews";
import { useEffect, useState } from "react";
import { stubNewsItem } from "@/pages/MainPage/ui/MainPage";
import { BannersList } from "./BannersList/BannersList";
interface LatestNewsProps {
  className?: string;
}
export const LatestNews = ({ className }: LatestNewsProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [latestNews, setLatestNews] = useState<NewsItemType[]>([
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
  ]);

  const fetchLatestNews = async () => {
    setIsLoading(true);
    try {
      const response: { news: NewsItemType[] } = await getLatestNews();
      setLatestNews(response.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchLatestNews();
  }, []);

  return (
    <section className={`${s.latestNews} ${className ? className : ""}`}>
      <BannersList
        banners={latestNews}
        isLoading={isLoading}
      />
    </section>
  );
};
