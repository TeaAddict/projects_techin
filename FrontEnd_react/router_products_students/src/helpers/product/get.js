import axios from "axios";

const url = import.meta.env.VITE_URL;

export const getAll = async () => {
  return (await axios.get(url)).data;
};
getAll;

export const getOne = async (id) => {
  return (await axios.get(`${url}?id=${id}`)).data[0];
};
getOne;
