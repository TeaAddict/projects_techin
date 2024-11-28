import axios from "axios";

const url = "http://localhost:5000/posts";

export const getAll = async () => {
  return (await axios.get(url)).data;
};
getAll;

export const getOne = async (id) => {
  return (await axios.get(`${url}/${id}`)).data;
};
getOne;
