import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./AppPagination.module.scss";
import { useMemo } from "react";

export const AppPagination = ({
  totalPages,
  currentPage,
  handleChangePage,
}: {
  totalPages: number;
  currentPage: number;
  handleChangePage: (page: number) => void;
}) => {
  // function getPageArray(currentPage: number, highestNumber: number, range = 5) {
  //   const diff = Math.max(0, Math.floor(range / 2));
  //   if (diff <= 0) throw new Error();
  //   if (highestNumber <= 0) return [];
  //   if (highestNumber <= range)
  //     return Array.from({ length: highestNumber }, (_, i) => "" + (i + 1));
  //   const final = ["1"];
  //   if (currentPage <= diff + 1) {
  //     for (let i = 2; i <= currentPage + diff; i++) final.push("" + i);
  //     final.push(...["...", "" + highestNumber]);
  //     return final;
  //   } else if (currentPage >= highestNumber - diff) {
  //     final.push("...");
  //     for (let i = currentPage - diff; i <= currentPage + diff; i++) {
  //       if (i >= highestNumber) break;
  //       final.push("" + i);
  //     }
  //     final.push("" + highestNumber);
  //     return final;
  //   } else {
  //     final.push("...");
  //     let i;
  //     for (i = currentPage - diff; i <= currentPage + diff; i++) {
  //       if (i >= highestNumber) break;
  //       final.push("" + i);
  //     }
  //     if (i < highestNumber) final.push("...");
  //     final.push("" + highestNumber);
  //     return final;
  //   }
  // }

  // const pageButtons = useMemo(() => {
  //   if (currentPage < 0 || currentPage == undefined) return null;
  //   const baseArray = getPageArray(currentPage, totalPages);
  //   return baseArray.map((page, index) => {
  //     if (page === "...") return <span>...</span>;
  //     const parsedInt = parseInt(page);
  //     return (
  //       <AppButton
  //         disabled={currentPage === parsedInt}
  //         onClick={() => handleChangePage(parsedInt)}
  //       >
  //         {page}
  //       </AppButton>
  //     );
  //   });
  // }, [currentPage]);
  return (
    <div className={s.appPagination}>
      <AppButton
        disabled={currentPage <= 1}
        className={s.arrow}
        onClick={() => handleChangePage(currentPage - 1)}
      >
        {"<"}
      </AppButton>
      <div className={s.list}>
        {[...Array(totalPages)].map((_, index) => (
          <AppButton
            disabled={currentPage === index + 1}
            key={index}
            className={`${s.pageNumber}`}
            onClick={() => handleChangePage(index + 1)}
          >
            {index + 1}
          </AppButton>
        ))}
      </div>
      {/* <div className={s.list}>{pageButtons}</div> */}
      <AppButton
        disabled={currentPage === totalPages}
        onClick={() => handleChangePage(currentPage + 1)}
        className={s.arrow}
      >
        {">"}
      </AppButton>
    </div>
  );
};
