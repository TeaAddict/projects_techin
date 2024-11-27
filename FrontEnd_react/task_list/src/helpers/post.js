import axios from "axios";

const url = import.meta.env.VITE_URL;

export const postData = async (data) => {
  const res = await axios.post(url, data);
  return res.data;
};
