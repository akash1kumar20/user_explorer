function UserCard({ users }) {
  return (
    <>
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </>
  );
}

export default UserCard;
