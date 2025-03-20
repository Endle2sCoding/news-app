import { AppContainer } from "@/shared/ui/AppContainer/AppContainer";
import s from "./MainPage.module.scss";
import { Banner } from "@/widgets/Banner";
import { useEffect, useState } from "react";
import { getNews, NewsItesmType } from "@/shared/api/apiNews";
import { NewsList } from "@/widgets/NewsList/NewsList";
const stubNewsItem: NewsItesmType = {
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

export function MainPage() {
  const [news, setNews] = useState<NewsItesmType[]>([
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
    stubNewsItem,
  ]);
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response: { news: NewsItesmType[] } = await getNews();
        setNews(response.news);
      } catch (error) {
        console.log(error);
      }
    };
    // fetchNews();
  }, []);
  console.log(news);

  return (
    <main className={s.mainPage}>
      <AppContainer>
        {news.length > 0 ? <Banner item={news[0]} /> : null}
        <NewsList news={news} />
      </AppContainer>
    </main>
  );
}
