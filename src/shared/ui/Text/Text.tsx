import { ReactNode } from "react";
import s from "./Text.module.scss";
interface TextProps {
  children: ReactNode;
  TagName?: "p" | "h1" | "h3";
  size?: "s" | "m";
  colorType?: "primary" | "not-accented";
  className?: string;
}
export const Text = ({
  children,
  TagName = "p",
  colorType = "primary",
  size = "m",
  className,
}: TextProps) => {
  return (
    <TagName
      className={`${s.text} ${s[colorType]} ${s[`size_${size}`]} ${className ? className : ""}`}
    >
      {children}
    </TagName>
  );
};
