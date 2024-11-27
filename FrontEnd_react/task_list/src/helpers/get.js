import axios from "axios";

const url = import.meta.env.VITE_URL;

export const getAll = async () => {
  const res = await axios.get(url);
  return res.data;
};
