import axios from "axios";

const url = "http://localhost:5000/posts";

const deleteData = async (id) => {
  return (await axios.delete(`${url}/${id}`)).data;
};
export default deleteData;
