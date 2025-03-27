import s from "./Categories.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface CategoriesProps {
  categories?: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string | null) => void;
}
export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
      <AppButton
        onClick={() => setSelectedCategory(null)}
        className={selectedCategory === "All" ? s.active : s.item}
      >
        {"All"}
      </AppButton>
      {categories &&
        categories.map((category, index) => {
          return (
            <AppButton
              key={category + index}
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? s.active : s.item}
            >
              {category}
            </AppButton>
          );
        })}
    </div>
  );
};
