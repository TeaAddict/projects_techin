import axios from "axios";

const url = import.meta.env.VITE_URL;

export const postdata = async (data) => {
  //   try {
  let response = await axios.post(url, data);

  console.log(response);
  // if (!response.ok) throw new Error("Bad request");

  return response.data;
  //   } catch (error) {
  //     return error.message;
  //   }
};
