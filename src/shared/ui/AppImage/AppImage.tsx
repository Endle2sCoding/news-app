import s from "./AppImage.module.scss";
interface ImageProps {
  src: string;
  alt: string;
  size?: "logo" | "banner";
  className?: string;
}
export const AppImage = ({
  src,
  alt,
  size = "banner",
  className,
}: ImageProps) => {
  return (
    <div
      className={`${s.appImageWrapper} ${s[size]} ${
        className ? className : ""
      }`}
    >
      {src ? (
      <img
        className={s.appImage}
        src={src}
        alt={alt}
      />
       ) : null} 
    </div>
  );
};
