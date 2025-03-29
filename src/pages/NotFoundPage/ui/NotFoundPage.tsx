import { AppContainer } from "@/shared/ui/AppContainer/AppContainer";
import s from "./NotFoundPage.module.scss";
import { Link } from "react-router-dom";
function NotFoundPage() {
  return (
    <main className={s.NotFoundPage}>
      <AppContainer className={s.container}>
        <h2> {"Страница не найдена"}</h2>
        <Link
          className={s.link}
          to="/"
        >
          {"Вернуться на главную"}
        </Link>
      </AppContainer>
    </main>
  );
}
export default NotFoundPage;
