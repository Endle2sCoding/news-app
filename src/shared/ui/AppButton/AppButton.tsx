import { ButtonHTMLAttributes } from "react";
import s from "./AppButton.module.scss";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  decoration?: "clear";
  className?: string;
}
export const AppButton = ({
  decoration = "clear",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      className={`${s.appButton} ${s[decoration]} ${
        className ? className : ""
      }`}
    ></button>
  );
};
