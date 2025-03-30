import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./Slider.module.scss";
import React, { ReactElement, useRef } from "react";
interface SliderProps {
  children: ReactElement;
  step?: number;
  className?: string;
}
export const Slider = ({ children, step = 150, className }: SliderProps) => {
  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollLeft += step;
  };
  return (
    <div className={`${s.slider} ${className ? className : ""}`}>
      <AppButton
        className={s.arrow}
        onClick={scrollLeft}
      >
        {"<"}
      </AppButton>
      {React.cloneElement(children, { ref: sliderRef })}
      <AppButton
        className={s.arrow}
        onClick={scrollRight}
      >
        {">"}
      </AppButton>
    </div>
  );
};
