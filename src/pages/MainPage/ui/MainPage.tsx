import { AppContainer } from "@/shared/ui/AppContainer/AppContainer";
import s from "./MainPage.module.scss";
import { useEffect, useState } from "react";
import { getNews, NewsItemType } from "@/shared/api/apiNews";
import { useDebounce } from "@/shared/helpers/hooks/useDebounce";
import { LatestNews } from "@/widgets/LatestNews";
import { NewsByFilters } from "@/widgets/NewsByFilters";
const stubNewsItem: NewsItemType = {
  author: "Malay Mail",
  category: ["general", "regional"],
  description:
    "KUALA LUMPUR, March 20 — The date for the 2024-2025 Malaysia Cup final between Johor Darul Ta'zim and Pahang FC has been changed to April 26 at 9 pm at the Bukit Jalil National Stadium (SNBJ).\nThis was announced by Malaysian Football League (MFL) which said the 98th edition final, which was supposed...",
  id: "e3e01fb1-345f-49fa-8997-0f4882ddce55",
  image:
    "https://www.malaymail.com/malaymail/uploads/images/2025/03/20/thumbs/400x400/266664.jpg",
  language: "en",
  published: "2025-03-20 12:17:10 +0000",
  title:
    "Malaysia Cup: Final between JDT and Sri Pahang changed to April 26, allowing fans to plan trip amid Raya celebrations",
  url: "https://www.malaymail.com/news/sports/2025/03/20/malaysia-cup-final-between-jdt-and-sri-pahang-changed-to-april-26-allowing-fans-to-plan-trip-amid-raya-celebrations/170267",
};

export function MainPage() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [news, setNews] = useState<NewsItemType[]>([
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

  const [filters, setFilters] = useState<{
    page_number: number;
    page_size: number;
    category: string | null;
    keywords: string;
  }>({
    page_number: 1,
    page_size: 10,
    category: null,
    keywords: "",
  });
  const changFilters = (key: string, value: string | number | null) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const debounceKeywords = useDebounce(filters.keywords, 1500);
  const [totalPages, setTotalPages] = useState<number>(10);

  const fetchNews = async () => {
    setIsLoading(true);
    try {
      const response: { news: NewsItemType[] } = await getNews({
        ...filters,
        keywords: debounceKeywords,
      });
      setNews(response.news);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // fetchNews();
  }, [filters.page_number, filters.category, debounceKeywords]);

  return (
    <main className={s.mainPage}>
      <AppContainer className={s.container}>
        <LatestNews
          isLoading={isLoading}
          banners={news}
        />
        <NewsByFilters
          filters={filters}
          changFilters={changFilters}
          totalPages={totalPages}
          isLoading={isLoading}
          news={news}
        />
      </AppContainer>
    </main>
  );
}
