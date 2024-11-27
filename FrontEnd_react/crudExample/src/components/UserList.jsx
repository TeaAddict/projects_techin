import User from "./User";

const UserList = ({ users, setUpdate }) => {
  return (
    <div className="overflow-auto flex flex-col items-center">
      {users.map((user) => {
        return <User user={user} setUpdate={setUpdate} key={user.id} />;
      })}
    </div>
  );
};

export default UserList;
