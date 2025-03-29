import { formatDate } from "@/shared/helpers/formatDate";
import s from "./Header.module.scss";
import NewsSvg from "@/shared/assets/images/news.svg";
export const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.logo}>
        <img
          className={s.img}
          src={NewsSvg}
          alt="logo"
        />
        <h1 className={s.title}>News</h1>
      </div>
      <p>{formatDate(new Date())}</p>
    </header>
  );
};
