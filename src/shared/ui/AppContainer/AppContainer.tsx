import { ReactNode } from "react";
import s from "./AppContainer.module.scss";
export const AppContainer = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return <div className={`${s.appContainer} ${className}`}>{children}</div>;
};
