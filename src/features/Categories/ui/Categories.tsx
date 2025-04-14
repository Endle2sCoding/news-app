import s from "./Categories.module.scss";
interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  className?: string;
}

export const Categories = ({
  categories,
  selectedCategory,
  setSelectedCategory,
  className,
}: CategoriesProps) => {
  return (
    <div className={`${s.categories} ${className ? className : ""}`}>
      {categories &&
        categories.map((c, i) => (
          <button
            className={`${c === selectedCategory ? s.active : s.item}`}
            key={c + i}
            onClick={() => setSelectedCategory(c)}
          >
            {c}
          </button>
        ))}
    </div>
  );
};
