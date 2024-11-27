import axios from "axios";
import { getOne } from "./get";

const url = import.meta.env.VITE_URL;

export const deleteOne = async (id) => {
  const { email } = await getOne(id);
  const confirmed = window.confirm(
    `Ar tikrai norite istrinti vartotoja su email: ${email}`
  );
  if (!confirmed) return;
  const response = await axios.delete(`${url}/${id}`);
  return response.data;
};

export const deleteAll = async () => {
  const response = await axios.delete(url);
  return response.data;
};
