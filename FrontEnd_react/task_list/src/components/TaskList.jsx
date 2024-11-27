import Task from "./Task";

const TaskList = ({ data, setIsUpdate }) => {
  return (
    <div className="flex flex-col gap-2 max-w-[43.12rem]">
      {data.map((task) => (
        <Task data={task} key={task.id} setIsUpdate={setIsUpdate} />
      ))}
    </div>
  );
};

export default TaskList;
