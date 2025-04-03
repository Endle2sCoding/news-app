import { NewsItemType } from "@/shared/api/apiNews";
import s from "./NewsList.module.scss";
import { NewsBanner } from "@/features/NewsBanner/ui/NewsBanner";
interface NewsListProps {
  newsList: NewsItemType[];
  className?: string;
}
export const NewsList = ({ newsList, className }: NewsListProps) => {
  return (
    <ul className={`${s.newsList} ${className ? className : ""}`}>
      {newsList.map((item, i) => (
        <NewsBanner
          key={item.id + i}
          newsItem={item}
          type="item"
        />
      ))}
    </ul>
  );
};
