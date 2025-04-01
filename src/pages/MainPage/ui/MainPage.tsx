import { Text } from "@/shared/ui/Text/Text";
import s from "./MainPage.module.scss";
import { NewsBanner } from "@/widgets/NewsBanner/ui/NewsBanner";
interface MainPageProps {
  className?: string;
}

export interface NewsItemType {
  id: string;
  title: string;
  url: string;
  published: string;
  author: string;
  category: string[];
  description: string;
  image: string;
  language: string;
}
const stubNewsItem: NewsItemType = {
  author: "Malay Mail",
  category: ["general", "regional"],
  description:
    "KUALA LUMPUR, March 20 — The date for the 2024-2025 Malaysia Cup final between Johor Darul Ta'zim and Pahang FC has been changed to April 26 at 9 pm at the Bukit Jalil National Stadium (SNBJ).\nThis was announced by Malaysian Football League (MFL) which said the 98th edition final, which was supposed...",
  id: "e3e01fb1-345f-49fa-8997-0f4882ddce55",
  image:
    "https://www.malaymail.com/malaymail/uploads/images/2025/03/20/thumbs/400x400/266664.jpg",
  language: "en",
  published: "2025-03-20 12:17:10 +0000",
  title:
    "Malaysia Cup: Final between JDT and Sri Pahang changed to April 26, allowing fans to plan trip amid Raya celebrations",
  url: "https://www.malaymail.com/news/sports/2025/03/20/malaysia-cup-final-between-jdt-and-sri-pahang-changed-to-april-26-allowing-fans-to-plan-trip-amid-raya-celebrations/170267",
};

const MainPage = ({ className }: MainPageProps) => {
  return (
    <main className={`${s.mainPage} ${className ? className : ""}`}>
      <NewsBanner item={stubNewsItem} />
    </main>
  );
};
export default MainPage;
