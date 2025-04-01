import { NewsItemType } from "@/pages/MainPage/ui/MainPage";
import s from "./NewsBanner.module.scss";
import { Text } from "@/shared/ui/Text/Text";
import { formatTimeAgo } from "@/shared/hooks/formatTimeAgo";
import { AppImage } from "@/shared/ui/AppImage/AppImage";

interface NewsBannerProps {
  item: NewsItemType;
  className?: string;
}
export const NewsBanner = ({ item, className }: NewsBannerProps) => {
  return (
    <div className={`${s.newsBanner} ${className ? className : ""}`}>
      <AppImage
        src={item.image}
        alt={"banner"}
      />
      <Text TagName="h3">{item.title}</Text>
      <Text
        colorType="not-accented"
        size="s"
      >
        {formatTimeAgo(item.published)} by {item.author}
      </Text>
    </div>
  );
};
