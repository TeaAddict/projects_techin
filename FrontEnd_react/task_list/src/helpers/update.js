import axios from "axios";

const url = import.meta.env.VITE_URL;

export const updateData = async (id, data) => {
  console.log("INSIDE UPDATE:", id, data);
  const res = await axios.patch(`${url}/${id}`, data);
  return res.data;
};
