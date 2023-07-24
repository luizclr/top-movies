import { Pagination as BasePagination } from "~/components/pagination/pagination.styles";
import { PaginationProps } from "~/components/pagination/types";

export const Pagination: React.FC<PaginationProps> = ({
  onChange,
  totalPages,
  forcePage,
}: PaginationProps) => {
  const handlePageClick = ({ selected }: { selected: number }): void => {
    onChange(selected);
  };

  return (
    <BasePagination
      forcePage={forcePage}
      breakLabel="..."
      nextLabel=">"
      onPageChange={handlePageClick}
      pageRangeDisplayed={1}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};
