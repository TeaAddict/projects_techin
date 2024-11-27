import axios from "axios";

const url = import.meta.env.VITE_URL;

export const deleteData = async (id) => {
  const res = await axios.delete(`${url}/${id}`);
  return res.data;
};
