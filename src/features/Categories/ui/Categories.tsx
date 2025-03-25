import { CategoriesType } from "@/shared/api/apiNews";
import s from "./Categories.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
interface CategoriesProps {
  categories?: CategoriesType[];
  selectedCategory: CategoriesType;
  setSelectedCategory: (category: CategoriesType) => void;
}
export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: CategoriesProps) => {
  return (
    <div className={s.categories}>
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
