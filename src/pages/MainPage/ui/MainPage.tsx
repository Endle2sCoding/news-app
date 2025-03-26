import { AppContainer } from "@/shared/ui/AppContainer/AppContainer";
import s from "./MainPage.module.scss";
import { Banner } from "@/widgets/Banner";
import { useEffect, useState } from "react";
import {
  CategoriesType,
  ResponseCategoriesType,
  getCategories,
  getNews,
  NewsItemType,
} from "@/shared/api/apiNews";
import { NewsList } from "@/widgets/NewsList/ui/NewsList";
import { AppSkeleton } from "@/shared/ui/AppSkeleton/AppSkeleton";
import { AppPagination } from "@/features/AppPagination";
import { Categories } from "@/features/Categories";
import { Search } from "@/features/Search";
import { useDebounce } from "@/shared/helpers/hooks/useDebounce";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(10);
  const pageSize = 10;

  const [categories, setCategories] = useState<CategoriesType[]>([
    "All",
    "regional",
    "technology",
    "lifestyle",
    "business",
    "general",
    "programming",
    "science",
    "entertainment",
    "world",
    "sports",
    "finance",
    "academia",
    "politics",
    "health",
    "opinion",
    "food",
    "game",
    "fashion",
    "academic",
    "crap",
    "travel",
    "culture",
    "economy",
    "environment",
    "art",
    "music",
    "notsure",
    "CS",
    "education",
    "redundant",
    "television",
    "commodity",
    "movie",
    "entrepreneur",
    "review",
    "auto",
    "energy",
    "celebrity",
    "medical",
    "gadgets",
    "design",
    "EE",
    "security",
    "mobile",
    "estate",
    "funny",
  ]);
  const [selectedCategory, setSelectedCategory] =
    useState<CategoriesType>("All");
  const [keywords, setKeywords] = useState<string>("");

  const debounceKeywords = useDebounce(keywords, 1500);

  const fetchNews = async () => {
    try {
      const response: { news: NewsItemType[] } = await getNews({
        page_number: currentPage,
        page_size: pageSize,
        category: selectedCategory === "All" ? null : selectedCategory,
        keywords: debounceKeywords,
      });
      setNews(response.news);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchCategories = async () => {
    try {
      setIsLoading(true);
      const response: { categories: ResponseCategoriesType[] } =
        await getCategories();

      setCategories(["All", ...response.categories]);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetchCategories();
  }, []);
  useEffect(() => {
    // fetchNews();
  }, [currentPage, selectedCategory, debounceKeywords]);

  const handleChangePage = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <main className={s.mainPage}>
      <AppContainer className={s.container}>
        <Search
          keywords={keywords}
          setKeywords={setKeywords}
        />
        <Categories
          selectedCategory={selectedCategory}
          categories={categories}
          setSelectedCategory={setSelectedCategory}
        />
        {news.length > 0 && !isLoading ? (
          <Banner item={news[0]} />
        ) : (
          <AppSkeleton
            count={1}
            type="banner"
          />
        )}
        <AppPagination
          handleChangePage={handleChangePage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
        {!isLoading ? (
          <>
            <NewsList news={news} />
          </>
        ) : (
          <AppSkeleton count={10} />
        )}
      </AppContainer>
    </main>
  );
}
