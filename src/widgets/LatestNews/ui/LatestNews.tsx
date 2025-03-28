import { BannersList } from "@/widgets/LatestNews/ui/BannersList";
import s from "./LatestNews.module.scss";
import { NewsItemType } from "@/shared/api/apiNews";
interface LatestNewsProps {
  banners?: NewsItemType[];
  isLoading: boolean;
  className?: string;
}
export const LatestNews = ({
  banners,
  isLoading,
  className,
}: LatestNewsProps) => {
  return (
    <section className={`${s.latestNews} ${className ? className : ""}`}>
      <BannersList
        banners={banners}
        isLoading={isLoading}
      />
    </section>
  );
};
