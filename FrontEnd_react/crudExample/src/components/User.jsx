import { useState } from "react";
import { deleteOne } from "../helpers/delete";
import { updateData } from "../helpers/update";
import Form from "./Form";

const User = ({ user, setUpdate }) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { username, email, channel, likes, id } = user;

  const handleDelete = async () => {
    await deleteOne(id);
    setUpdate((update) => update + 1);
  };

  const handleLike = async () => {
    await updateData(id, { likes: likes + 1 });
    setUpdate((update) => update + 1);
  };

  return (
    <div className="flex flex-col gap-2 p-1 m-2 border-t-2 border-white">
      <div>
        <p>Username: {username}</p>
        <p>Email: {email}</p>
        <p>Channel: {channel}</p>
        <p>Likes: {likes}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handleDelete}
          className="border-2 border-white rounded-md py-1 px-2"
        >
          Delete
        </button>
        <button
          onClick={handleLike}
          className="border-2 border-white rounded-md py-1 px-2"
        >
          Like
        </button>
        <button
          onClick={() => setIsEditOpen((isEditOpen) => !isEditOpen)}
          className="border-2 border-white rounded-md py-1 px-2"
        >
          {isEditOpen ? "Close edit" : "Edit"}
        </button>
      </div>
      {isEditOpen && <Form setUpdate={setUpdate} user={user} />}
    </div>
  );
};

export default User;
