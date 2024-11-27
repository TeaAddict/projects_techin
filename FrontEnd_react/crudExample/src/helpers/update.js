import axios from "axios";

const url = import.meta.env.VITE_URL;

export const updateData = async (id, data) => {
  const result = await axios.patch(`${url}/${id}`, data);
  return result.data;
};
