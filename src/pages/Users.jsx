import axios from "axios";
import { useEffect, useState } from "react";
import UserCard from "../components/UserCard";
import Loader from "../helpers/Loader";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

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
    return (
      <>
        <UserCard users={users} />
      </>
    );
  }
}

export default Users;
