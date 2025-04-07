import s from "./Skeleton.module.scss";
interface SkeletonProps {
  count?: number;
  type?: "banner" | "item";
}
export const Skeleton = ({ count = 1, type = "banner" }: SkeletonProps) => {
  return (
    <>
      {count > 1 ? (
        <ul className={s.list}>
          {[...Array(count)].map((_, i) => (
            <li
              key={i}
              className={type === "banner" ? s.banner : s.item}
            ></li>
          ))}
        </ul>
      ) : (
        <li className={type === "banner" ? s.banner : s.item}></li>
      )}
    </>
  );
};
