import s from "./NewsBanner.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { formatTimeAgo } from "@/shared/hooks/formatTimeAgo";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { NewsItemType } from "@/shared/api/apiNews";

interface NewsBannerProps {
  newsItem: NewsItemType;
  type?: "banner" | "item";
  className?: string;
}
export const NewsBanner = ({
  newsItem,
  type = "banner",
  className,
}: NewsBannerProps) => {
  const MapTagname = type === "banner" ? "div" : "li";
  return (
    <MapTagname
      className={`${s.newsBanner} ${s[type]} ${className ? className : ""}`}
    >
      <AppImage
        src={newsItem.image}
        alt={"banner"}
        size={type}
      />
      <div className={s.info}>
        <Text TagName={type === "banner" ? "h3" : "h4"}>{newsItem.title}</Text>
        <Text
          colorType="not-accented"
          size="xs"
        >
          {formatTimeAgo(newsItem.published)} by {newsItem.author}
        </Text>
      </div>
    </MapTagname>
  );
};
