import { useForm } from "react-hook-form";
import { postdata } from "../helpers/post";
import { useState } from "react";
import { updateData } from "../helpers/update";

const Form = ({ setUpdate, user }) => {
  const url = "http://localhost:5000/users/";

  const [error, setError] = useState("");

  // const { username, email, channel } = user;

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm({
    defaultValues: {
      username: user?.username || "",
      email: user?.email || "",
      channel: user?.channel || "",
    },
  });

  const handleSubmitForm = async (data) => {
    try {
      if (user) {
        await updateData(user.id, data);
      } else {
        await postdata({ ...data, likes: 0 });
      }
      setUpdate((update) => update + 1);
    } catch (error) {
      alert(error.message);
      setError(error.message);
    }
  };

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(handleSubmitForm)} noValidate>
        <div className="grid grid-cols-[1fr_2fr]">
          <label htmlFor="username">User Name:</label>
          <input
            className="text-black"
            type="text"
            id="username"
            {...register("username", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.username?.message}</div>
        </div>

        <div className="grid grid-cols-[1fr_2fr]">
          <label htmlFor="email">User Email:</label>
          <input
            className="text-black"
            type="text"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Ivalid email adress format",
              },
              validate: {
                notAdmin: (fieldValue) => {
                  return (
                    fieldValue !== "admin@gmail.com" ||
                    "Enter different email address"
                  );
                },
                notBlackListed: (fieldValue) => {
                  return (
                    !fieldValue.endsWith("bademail.com") ||
                    "This email is not valid"
                  );
                },
              },
            })}
          />
          <div className="error">{errors.email?.message}</div>
        </div>

        <div className="grid grid-cols-[1fr_2fr]">
          <label htmlFor="channel">Favourite channel:</label>
          <input
            className="text-black"
            type="text"
            id="channel"
            {...register("channel")}
          />
        </div>

        <input
          type="submit"
          value="Submit"
          className="border-2 border-white rounded-md px-2 py-1"
        />
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Form;
