import { Link, LinkProps } from "react-router-dom";
import s from "./AppLink.module.scss";
import { ReactNode } from "react";
interface AppLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}
export const AppLink = ({
  children,
  className,
  to = "/",
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      to={to}
      className={`${s.appLink} ${className ? className : ""}`}
    >
      {children}
    </Link>
  );
};
