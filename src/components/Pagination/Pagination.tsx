import "./Pagination.scss";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const getMobilePages = (current: number, total: number) => {
  const pages: number[] = [];

  let start = Math.max(1, current - 1);
  const end = Math.min(total, start + 2);

  if (end - start < 2) {
    start = Math.max(1, end - 2);
  }

  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  return pages;
};

const Pagination = ({
  totalPages,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const pages = getMobilePages(currentPage, totalPages);

  return (
    <nav className="pagination-container">
      <button
        className="nav-button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Anterior"
      >
        &lsaquo;
      </button>

      <div className="page-numbers">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`page-item ${currentPage === page ? "active" : ""}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        className="nav-button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Siguiente"
      >
        &rsaquo;
      </button>
    </nav>
  );
};

export default Pagination;
