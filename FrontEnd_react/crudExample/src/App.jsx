import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { getAllData } from "./helpers/get";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState("");
  const [error, setError] = useState("");
  const [update, setUpdate] = useState("");

  const fetchData = async () => {
    try {
      const data = await getAllData();
      setUsers(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <div className="h-[100vh] flex flex-col gap-4 py-5 bg-black text-white">
      <Form setUpdate={setUpdate} />
      {!error && users && <UserList users={users} setUpdate={setUpdate} />}
    </div>
  );
}

export default App;
