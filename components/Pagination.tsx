"use client";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({ totalItems, itemsPerPage, currentPage, onPageChange }: PaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const maxVisiblePages = 10;
  const startPage = Math.floor((currentPage - 1) / maxVisiblePages) * maxVisiblePages + 1;
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const handleNextPageGroup = () => {
    if (endPage < totalPages) onPageChange(endPage + 1);
  };

  const handlePreviousPageGroup = () => {
    if (startPage > 1) onPageChange(startPage - 1);
  };

  return (
    <div className="flex flex-wrap justify-center items-center space-x-2 mt-4">
      {startPage > 1 && (
        <button className="px-2 py-1 border rounded-3xl" onClick={handlePreviousPageGroup}>
          ...
        </button>
      )}
      {Array.from({ length: endPage - startPage + 1 }, (_, idx) => {
        const page = startPage + idx;
        return (
          <button
            key={page}
            className={`px-2 py-1 border rounded-3xl ${currentPage === page ? 'bg-blue-500 text-white' : 'hover:bg-blue-500 hover:text-white duration-300'}`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        );
      })}
      {endPage < totalPages && (
        <button className="px-2 py-1 border rounded-3xl" onClick={handleNextPageGroup}>
          ...
        </button>
      )}
      <style jsx>{`
        @media (max-width: 640px) {
          .pagination-buttons {
            padding: 4px;
            margin: 4px;
          }
        }
      `}</style>
    </div>
  );
}