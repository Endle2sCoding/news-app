import s from "./AppImgae.module.scss";
interface AppImgaeProps {
  src?: string;
  alt?: string;
}
export const AppImgae = ({ src, alt = "image" }: AppImgaeProps) => {
  return (
    <div className={s.appImageWrapper}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={s.appImgae}
        />
      ) : null}
    </div>
  );
};
