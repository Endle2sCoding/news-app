import { ChangeEvent } from "react";
import s from "./Search.module.scss";

interface SearchProps {
  keywords: string;
  setKeywords: (value: string) => void;
  className?: string;
}

export const Search = ({ keywords, setKeywords, className }: SearchProps) => {
  return (
    <div className={`${s.search} ${className ? className : ""}`}>
      <input
        type="text"
        value={keywords}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setKeywords(e.currentTarget.value)
        }
        className={`${s.input}`}
      />
    </div>
  );
};
