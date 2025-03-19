import { formatDate } from "@/shared/helpers/formatDate";
import s from "./Header.module.scss";
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          className={s.img}
          src="/news.svg"
          alt="logo"
        />
        <h1>News</h1>
      </div>
      <p>{formatDate(new Date())}</p>
    </header>
  );
};
