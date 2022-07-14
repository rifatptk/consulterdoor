interface IPagination {
  currentPage: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export type { IPagination };
