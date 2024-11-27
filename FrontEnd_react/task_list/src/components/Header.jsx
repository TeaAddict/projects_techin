import { useState } from "react";
import Modal from "./Modal";
import Form from "./Form";

const Header = ({ setIsUpdate }) => {
  const [isAdding, setIsAdding] = useState(false);

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-3xl font-bold">Task List</h1>
      <button
        className="bg-[#753efb] text-white rounded-lg py-1 px-4"
        onClick={() => setIsAdding((isAdding) => !isAdding)}
      >
        + Add Task
      </button>
      <Modal open={isAdding} setOpen={setIsAdding}>
        <Form setOpen={setIsAdding} setIsUpdate={setIsUpdate} />
      </Modal>
    </div>
  );
};

export default Header;
