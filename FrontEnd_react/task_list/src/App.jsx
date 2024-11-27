import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import { getAll } from "./helpers/get";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isUpdate, setIsUpdate] = useState(0);

  const fetchData = async () => {
    try {
      const res = await getAll();
      setTasks(res);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [isUpdate]);

  return (
    <div className="h-[100vh] bg-[#f0f2f5] flex justify-center items-center">
      <div className="flex flex-col gap-6">
        <Header setIsUpdate={setIsUpdate} />
        <TaskList data={tasks} setIsUpdate={setIsUpdate} />
      </div>
    </div>
  );
}

export default App;
