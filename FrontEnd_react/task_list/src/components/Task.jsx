import { useState } from "react";
import { deleteData } from "../helpers/delete";
import capitalizeFirstLetter from "../helpers/capitalizeFirstLetter";
import ProgressCircle from "./ProgressCircle";
import Modal from "./Modal";
import Form from "./Form";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";
import { updateData } from "../helpers/update";

const Task = ({ data, setIsUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const { id, name, priority, status, completed } = data;

  const priorities = {
    high: { value: "High", color: "#ec1b1b" },
    medium: { value: "Medium", color: "#f8f54e" },
    low: { value: "Low", color: "#68f14a" },
  };
  const statuses = { toDo: "To Do", inProgress: "In Progress", done: "Done" };

  const handleEdit = async () => {
    setIsEditing((isEditing) => !isEditing);
  };

  const handleDelete = async () => {
    try {
      await deleteData(id);
      setIsUpdate((isUpdate) => isUpdate + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleStatusChange = () => {
    try {
      let newTask = {};
      if (status == "done") newTask = { ...data, status: "toDo", completed: 0 };
      else if (status == "toDo")
        newTask = { ...data, status: "inProgress", completed: 50 };
      else newTask = { ...data, status: "done", completed: 100 };

      updateData(id, newTask);
      setIsUpdate((isUpdate) => isUpdate + 1);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3 p-5 rounded-3xl bg-white">
        <div className="flex flex-col w-[10.6rem]">
          <div>
            <p className="text-[#bdc4cc]">Task</p>
            <p className="text-[#0a1629] font-semibold">
              {capitalizeFirstLetter(name)}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div>
            <p className="text-[#bdc4cc]">Priority</p>
            {priority && (
              <p className={`text-[${priorities[priority].color}] font-[500]`}>
                {priorities[priority].value}
              </p>
            )}
          </div>
        </div>
        <div className="flex justify-center">
          {status && (
            <button
              onClick={handleStatusChange}
              className="text-[#828b99] py-1 px-2 bg-[#eceef0] rounded-lg"
            >
              {statuses[status]}
            </button>
          )}
        </div>

        <div className="flex flex-col items-center">
          <ProgressCircle percentage={completed} />
        </div>

        <div className="flex flex-col items-center">
          <div className="flex gap-1">
            <button
              onClick={handleEdit}
              className="text-3xl cursor-pointer hover:bg-gray-100 rounded-md p-1"
            >
              <FaRegEdit />
            </button>
            <button onClick={handleDelete}>
              <RiDeleteBin5Line className="text-red-500 text-4xl cursor-pointer hover:bg-gray-100 rounded-md p-1" />
            </button>
          </div>
        </div>
      </div>
      {isEditing && (
        <Modal open={isEditing} setOpen={setIsEditing}>
          <Form
            setOpen={setIsEditing}
            defaultData={data}
            setIsUpdate={setIsUpdate}
          />
        </Modal>
      )}
    </div>
  );
};

export default Task;
