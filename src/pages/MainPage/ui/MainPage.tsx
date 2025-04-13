import s from "./MainPage.module.scss";
import { NewsBanner } from "@/features/NewsBanner/ui/NewsBanner";
import { useEffect, useState } from "react";
import { getNews, NewsItemType } from "@/shared/api/apiNews";
import { NewsList } from "@/widgets/NewsList";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { Pagination } from "@/features/Pagination";
interface MainPageProps {
  className?: string;
}
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

const MainPage = ({ className }: MainPageProps) => {
  const [news, setNews] = useState<NewsItemType[]>([
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
  ]);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const [pageSize, setPageSize] = useState<number>(10);

  const fetchNews = async (currentPage: number) => {
    setisLoading(true);
    try {
      const response = await getNews({ page_number: currentPage });
      setNews(response.news);
      setTotalPages(response.news.length > 10 ? 10 : response.news.length);
      setisLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // fetchNews(currentPage);
  }, [currentPage]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main className={`${s.mainPage} ${className ? className : ""}`}>
      {news.length > 0 && !isLoading ? (
        <NewsBanner newsItem={news[0]} />
      ) : (
        <Skeleton />
      )}
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handleChangePage={handleChangePage}
      />
      {!isLoading ? (
        <NewsList newsList={news} />
      ) : (
        <Skeleton
          count={10}
          type="item"
        />
      )}
    </main>
  );
};
export default MainPage;
