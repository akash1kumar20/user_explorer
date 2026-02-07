function SearchBar({ filterBy, searchInput, setSearchInput }) {
  return (
    <div>
      <input
        type="text"
        placeholder={`Search by ${filterBy.toUpperCase()} ...`}
        className="bg-blue-700 text-white text-xl px-4 py-2 mb-2 rounded-2xl border-2 border-black"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
      />
      <button
        className="bg-red-700 text-white text-xl px-4 py-2 mb-2 rounded-2xl border-2 border-black ml-2 hover:cursor-pointer hover:scale-105"
        onClick={() => location.reload()}
      >
        X
      </button>
    </div>
  );
}

export default SearchBar;
