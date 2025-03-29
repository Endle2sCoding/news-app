import s from "./NewsByFilters.module.scss";

import { AppPagination } from "@/features/AppPagination";
import { Categories } from "@/features/Categories";
import { Search } from "@/features/Search";
import { stubNewsItem } from "@/pages/MainPage/ui/MainPage";
import { getNews, NewsItemType } from "@/shared/api/apiNews";
import { useDebounce } from "@/shared/helpers/hooks/useDebounce";
import { NewsBanner } from "@/widgets/NewsBanner";
import { NewsList } from "@/widgets/NewsList/ui/NewsList";
import { useEffect, useState } from "react";
interface NewsByFiltersProps {
  className?: string;
}
export const NewsByFilters = ({ className }: NewsByFiltersProps) => {
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

  const handleChangePage = (page: number) => {
    changFilters("page_number", page);
  };
  return (
    <section className={`${s.newsByFilters} ${className ? className : ""}`}>
      <Search
        keywords={filters.keywords}
        setKeywords={(keywords: string) => changFilters("keywords", keywords)}
      />
      <Categories
        selectedCategory={filters.category}
        setSelectedCategory={(category: string | null) =>
          changFilters("category", category)
        }
      />
      <NewsBanner
        isLoading={isLoading}
        item={news.length > 0 && news[0] ? news[0] : news[0]}
      />

      <AppPagination
        handleChangePage={handleChangePage}
        totalPages={totalPages}
        currentPage={filters.page_number}
      />
      <NewsList
        isLoading={isLoading}
        news={news}
      />
      {/* {!isLoading ? (
        <>
          <NewsList news={news} />
        </>
      ) : (
        <AppSkeleton
          count={10}
          direction="column"
        />
      )} */}
    </section>
  );
};
