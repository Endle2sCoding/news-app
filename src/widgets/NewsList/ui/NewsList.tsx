import { NewsItesmType } from "@/shared/api/apiNews";
import s from "./NewsList.module.scss";
import { NewsItem } from "./NewsItem/NewsItem";
interface NewsListProps {
  news: NewsItesmType[];
}
export const NewsList = ({ news }: NewsListProps) => {
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
