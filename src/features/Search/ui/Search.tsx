import { ChangeEvent, InputHTMLAttributes } from "react";
import s from "./Search.module.scss";
interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {
  keywords: string;
  setKeywords: (keywords: string) => void;
  className?: string;
}
export const Search = ({
  keywords,
  setKeywords,
  className,
  ...otherProps
}: SearchProps) => {
  return (
    <div className={s.search}>
      <input
        {...otherProps}
        className={`${s.input} ${className ? className : ""}`}
        type="text"
        value={keywords}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeywords(e.currentTarget.value)
        }
        placeholder="Search"
      />
    </div>
  );
};
