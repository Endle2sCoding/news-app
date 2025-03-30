import { ForwardedRef, forwardRef, useEffect, useState } from "react";
import s from "./Categories.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { getCategories } from "@/shared/api/apiNews";
interface CategoriesProps {
  categories?: string[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}
export const Categories = forwardRef(
  (
    { selectedCategory, setSelectedCategory }: CategoriesProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const [categories, setCategories] = useState<string[]>([
      "regional",
      "technology",
      "lifestyle",
      "business",
      "general",
      "programming",
      "science",
      "entertainment",
      "world",
      "sports",
      "finance",
      "academia",
      "politics",
      "health",
      "opinion",
      "food",
      "game",
      "fashion",
      "academic",
      "crap",
      "travel",
      "culture",
      "economy",
      "environment",
      "art",
      "music",
      "notsure",
      "CS",
      "education",
      "redundant",
      "television",
      "commodity",
      "movie",
      "entrepreneur",
      "review",
      "auto",
      "energy",
      "celebrity",
      "medical",
      "gadgets",
      "design",
      "EE",
      "security",
      "mobile",
      "estate",
      "funny",
    ]);
    const fetchCategories = async () => {
      try {
        const response: { categories: string[] } = await getCategories();

        setCategories([...response.categories]);
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      // fetchCategories();
    }, []);
    return (
      <div
        className={s.categories}
        ref={ref}
      >
        <AppButton
          onClick={() => setSelectedCategory(null)}
          className={selectedCategory === null ? s.active : s.item}
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
  }
);
