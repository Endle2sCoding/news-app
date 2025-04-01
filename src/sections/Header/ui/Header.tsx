import { Container } from "@/shared/ui/Container/Container";
import s from "./Header.module.scss";
import { formatDate } from "@/shared/hooks/formatDate";
import Logo from "@/shared/assets/images/news.svg";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import { Text } from "@/shared/ui/Text/Text";

interface HeaderProps {
  className?: string;
}
export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ? className : ""}`}>
      <Container className={s.container}>
        <AppLink
          className={s.logo}
          to={"/"}
        >
          <AppImage
            size="logo"
            src={Logo}
            alt="logo"
          />
          <Text TagName="h1">News</Text>
        </AppLink>
        <Text>{formatDate(new Date())}</Text>
      </Container>
    </header>
  );
};
