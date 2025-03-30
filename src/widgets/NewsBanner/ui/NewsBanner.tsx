// import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { AppImgae } from "@/shared/ui/AppImgae/AppImgae";
import s from "./NewsBanner.module.scss";
import { NewsItemType } from "@/shared/api/apiNews";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
interface BannerProps {
  item?: NewsItemType;
  isLoading: boolean;
}
export const NewsBanner = ({
  item = {
    id: "1",
    title: "news",
    published: "2025-03-20 12:17:10 +0000",
    author: "author",
    url: "",
    category: [],
    description: "",
    image: "",
    language: "",
  },
  isLoading,
}: BannerProps) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div className={s.banner}>
      <AppImgae
        alt={item.title}
        src={item.image}
      />
      <h3 className={s.title}>{item.title}</h3>
      <p className={s.extra}>
        {formatTimeAgo(item.published) || "3 days ago"} by {item.author}
      </p>
    </div>
  );
};
