import axios from "axios";

const url = import.meta.env.VITE_URL;

export const getAllData = async () => {
  const response = await axios.get(url);
  return response.data;
};
export const getOne = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
