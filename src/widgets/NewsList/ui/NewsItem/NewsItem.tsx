import { NewsItemType } from "@/shared/api/apiNews";
import s from "./NewsItem.module.scss";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
interface NewsItemProps {
  item: NewsItemType;
}
export const NewsItem = ({ item }: NewsItemProps) => {
  return (
    <div
      key={item.id}
      className={s.newsItem}
    >
      <div className={s.imgWrapper}>
        <img
          className={s.img}
          alt={"image"}
          src={item.image}
        />
      </div>
      <div className={s.newsInfo}>
        <h3 className={s.title}>{item.title}</h3>
        <p className={s.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </div>
  );
};
