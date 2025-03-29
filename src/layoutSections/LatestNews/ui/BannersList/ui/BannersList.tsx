import { NewsBanner } from "@/widgets/NewsBanner";
import s from "./BannersList.module.scss";
import { NewsItemType } from "@/shared/api/apiNews";
interface BannersListProps {
  banners?: NewsItemType[];
  isLoading: boolean;
  className?: string;
}
export const BannersList = ({
  banners,
  isLoading,
  className,
}: BannersListProps) => {
  return (
    <ul className={`${s.bannersList} ${className ? className : ""}`}>
      {banners?.map((b, i) => (
        <NewsBanner
          isLoading={isLoading}
          key={b.id + i}
          item={b}
        />
      ))}
    </ul>
  );
};
