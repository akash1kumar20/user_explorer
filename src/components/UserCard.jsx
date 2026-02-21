function UserCard({ users, filterBy, pageNo }) {
  const highlight = (field) =>
    filterBy === field ? "bg-white text-black" : "";
  return (
    <>
      <h2 className="text-black text-xl font-bold">Current Page : {pageNo}</h2>
      <div className="bg-black flex gap-2 justify-center flex-wrap py-10 h-84 rounded-lg">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-amber-600 text-white text-lg rounded-xl h-48 w-72 p-4"
          >
            <div className={highlight("name")}>
              Name :- {user.name.toUpperCase()}
            </div>
            <div className={highlight("username")}>
              Username :- {user.username}
            </div>
            <div className={highlight("email")}>Email :- {user.email}</div>
            <div className={highlight("phone")}>Phone :-{user.phone}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default UserCard;
