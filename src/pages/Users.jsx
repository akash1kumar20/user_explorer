import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../helpers/Loader";
import SearchBar from "../components/SearchBar";

function Users({ filterBy, filterSelected }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchInput, setSearchInput] = useState("");

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

    return (
      <>
        {filterSelected && (
          <SearchBar
            filterBy={filterBy}
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        )}
        <UserCard users={filteredUsers} filterBy={filterBy} />
      </>
    );
  }
}

export default Users;
