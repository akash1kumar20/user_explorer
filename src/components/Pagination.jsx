function Pagination({ currentPage, setCurrentPage, totalPages }) {
  return (
    <div className="text-xl mt-2 font-bold">
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((prev) => prev - 1)}
        className="hover:cursor-pointer"
      >
        Prev
      </button>

      <span className="mx-4 underline underline-offset-6 decoration-4 decoration-blue-700">
        {currentPage} / {totalPages}
      </span>

      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((prev) => prev + 1)}
        className="hover:cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
