import axios from "axios";

const url = import.meta.env.VITE_URL_MESSAGES;

const post = async (data) => {
  return await axios.post(url, data);
};

export default post;
