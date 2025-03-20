import { NewsItesmType } from "@/shared/api/apiNews";
import s from "./NewsList.module.scss";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
interface NewsListProps {
  news: NewsItesmType[];
}
export const NewsList = ({ news }: NewsListProps) => {
  return (
    <div className={s.newsList}>
      {news.map((n) => (
        <div>
          <img
            alt={n.title}
            src={n.image}
          />
          <h3 className={s.title}>{n.title}</h3>
          <p className={s.extra}>
            {formatTimeAgo(n.published)} by {n.author}
          </p>
        </div>
      ))}
    </div>
  );
};
