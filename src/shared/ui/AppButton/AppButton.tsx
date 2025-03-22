import { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  decorator?: "clear" | "filled";
  colorType?: "primary";
  className?: string;
  disabled?: boolean;
}
export const AppButton = ({
  children,
  decorator = "clear",
  colorType = "primary",
  disabled,
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      className={`${s.appButton} 
      ${decorator && s[decorator]}
      ${colorType && s[colorType]}
      ${disabled && s.disabled}
      ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
