import s from "./NewsByFilters.module.scss";

import { AppPagination } from "@/features/AppPagination";
import { Categories } from "@/features/Categories";
import { Search } from "@/features/Search";
import { NewsItemType } from "@/shared/api/apiNews";
import { NewsBanner } from "@/widgets/NewsBanner";
import { NewsList } from "@/widgets/NewsList/ui/NewsList";
interface NewsByFiltersProps {
  filters: {
    page_number: number;
    page_size: number;
    category: string | null;
    keywords: string;
  };
  changFilters: (key: string, value: string | number | null) => void;
  totalPages: number;
  isLoading: boolean;
  news: NewsItemType[];
  className?: string;
}
export const NewsByFilters = ({
  filters,
  changFilters,
  totalPages,
  isLoading,
  news,
  className,
}: NewsByFiltersProps) => {
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
