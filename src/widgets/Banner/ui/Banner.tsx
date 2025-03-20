// import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
import { AppImgae } from "@/shared/ui/AppImgae/AppImgae";
import s from "./Banner.module.scss";
import { NewsItesmType } from "@/shared/api/apiNews";
import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";
interface BannerProps {
  item?: NewsItesmType;
}
export const Banner = ({
  item = {
    title: "news",
    published: "2025-03-20 12:17:10 +0000",
    author: "author",
  },
}: BannerProps) => {
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
