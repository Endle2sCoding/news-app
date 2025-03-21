import s from "./AppSkeleton.module.scss";
interface AppSkeletonProps {
  count: number;
  type?: "banner" | "item";
}
export const AppSkeleton = ({ count, type }: AppSkeletonProps) => {
  return (
    <>
      {count > 1 ? (
        <ul className={s.list}>
          {[...Array(count)].map((_, index) => (
            <li
              key={index}
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
