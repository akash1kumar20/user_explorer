function UserCard({ users }) {
  return (
    <div className="bg-black flex gap-2 h-screen justify-center flex-wrap py-10 rounded-lg">
      {users.map((user) => (
        <div
          key={user.id}
          className="bg-amber-600 text-white text-lg rounded-xl h-48 w-72 p-4"
        >
          <div>Name :- {user.name.toUpperCase()}</div>
          <div>Username :- {user.username}</div>
          <div>Email :- {user.email}</div>
          <div> Phone :-{user.phone}</div>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
