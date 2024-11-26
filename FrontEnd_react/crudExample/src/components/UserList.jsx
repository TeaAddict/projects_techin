import User from "./User";

const UserList = ({ users }) => {
  console.log("USER LIST:", users);
  return (
    <div>
      {users.map((user) => {
        return <User user={user} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
