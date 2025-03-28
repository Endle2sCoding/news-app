import { NewsItemType } from "@/shared/api/apiNews";
import s from "./NewsList.module.scss";
import { NewsItem } from "./NewsItem/NewsItem";

interface NewsListProps {
  news: NewsItemType[];
  isLoading: boolean;
}
export const NewsList = ({ news, isLoading }: NewsListProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.newsList}>
      {news &&
        news.map((item, i) => (
          <NewsItem
            item={item}
            key={item.id + i}
          />
        ))}
    </div>
  );
};
