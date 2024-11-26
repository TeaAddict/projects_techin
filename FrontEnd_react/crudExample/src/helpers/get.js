import axios from "axios";

const url = "http://localhost:5000/users";

export const getAllData = async () => {
  const response = await axios.get(url);
  console.log(response.data);
  return response.data;
};
export const getOne = async (id) => {
  const response = await axios.get(`${url}/${id}`);
  return response.data;
};
