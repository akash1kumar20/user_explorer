function FilterOption({ setFilterBy, setFilterSelected }) {
  function filterOperation(e) {
    setFilterBy(e.target.value);
    setFilterSelected(true);
  }

  return (
    <div className=" text-white mb-1 flex justify-end ">
      <select
        name="filterBy"
        id="filteryBy"
        className="w-fit bg-black p-2 rounded-2xl text-lg focus:bg-amber-800"
        onChange={(e) => filterOperation(e)}
      >
        <option value="" hidden>
          Filter By:
        </option>
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
        <option value="phone">Phone</option>
      </select>
    </div>
  );
}

export default FilterOption;
