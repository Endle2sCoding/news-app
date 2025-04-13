import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./Pagination.module.scss";
interface PaginationProps {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
  className?: string;
}
export const Pagination = ({
  totalPages,
  currentPage,
  handleChangePage,
  className,
}: PaginationProps) => {
  return (
    <div className={`${s.pagination} ${className ? className : ""}`}>
      <AppButton
        onClick={() => {
          if (currentPage <= 1) {
            handleChangePage(currentPage - 1);
          }
        }}
        className={`${currentPage === 1 ? s.disable : ""}`}
        disabled={currentPage === 1}
      >
        {"<"}
      </AppButton>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, i) => (
          <AppButton
            onClick={() => {
              if (currentPage !== totalPages) {
                handleChangePage(i + 1);
              }
            }}
            key={i}
            className={`${
              currentPage === i + 1 ? s.disable : ""
            }`}
            disabled={currentPage === i + 1}
          >
            {i + 1}
          </AppButton>
        ))}
      </div>
      <AppButton
        onClick={() => handleChangePage(1)}
        className={`${
          currentPage === totalPages ? s.disable : ""
        }`}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </AppButton>
    </div>
  );
};
