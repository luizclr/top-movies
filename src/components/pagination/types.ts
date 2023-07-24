export type PaginationProps = {
  onChange: (page: number) => void;
  totalPages: number;
  shouldReset?: () => boolean;
  forcePage: number;
};
