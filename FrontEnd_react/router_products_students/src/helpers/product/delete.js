import axios from "axios";

const url = import.meta.env.VITE_URL

const deleteData = async (id) => {
  return (await axios.delete(`${url}/${id}`)).data;
};
export default deleteData;
