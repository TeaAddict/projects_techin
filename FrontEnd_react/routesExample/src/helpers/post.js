import axios from "axios";

const url = "http://localhost:5000/posts";

const postData = async (data) => {
  return (await axios.post(url, data)).data;
};
export default postData;
