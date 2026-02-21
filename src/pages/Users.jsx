import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../helpers/Loader";
import SearchBar from "../components/SearchBar";
import Pagination from "../components/Pagination";

function Users({ filterBy, filterSelected }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let res = await axios.get("https://jsonplaceholder.typicode.com/users");
        const data = res.data;
        if (res.status === 200) {
          setUsers(data);
        } else if (res.status !== 200) {
          setError(`Can't fetch user details`);
        }
      } catch (err) {
        setError("Network Error");
        console.log(err);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  const lastIndex = currentPage * usersPerPage;
  const firstIndex = lastIndex - usersPerPage;

  if (users.length > 0) {
    const filteredUsers = users.filter((user) =>
      String(user[filterBy] ?? "")
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    );

    //Upper Code Explanation :
    //user[filterBy] - will tell us in which category user is searching, ex: phone, email, etc
    //user[filterBy] ?? "" -  if any case, some entry is missing, like for one user phone section is present but missing in other, then it become empty string instead of undefined.
    //String will help us to search number also
    //filter decision:
    // If true → user stays in list
    // If false → user removed

    const currentUsers = filteredUsers.slice(firstIndex, lastIndex);
    //for the pagination, we're sliceing the data, now we only show 3 users/page

    const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

    return (
      <>
        {filterSelected && (
          <SearchBar
            filterBy={filterBy}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        )}
        <UserCard
          users={currentUsers}
          filterBy={filterBy}
          pageNo={currentPage}
        />
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </>
    );
  }
}

export default Users;
