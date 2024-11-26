import { useForm } from "react-hook-form";
import { postdata } from "../helpers/post";
import { useState } from "react";

const Form = ({ setUpdate }) => {
  const url = "http://localhost:5000/users/";

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,

    formState: { errors },
    reset,
  } = useForm({
    defaultValues: { userName: "a", email: "as@zx.com", channel: "cc" },
  });

  const handlePost = async (data) => {
    try {
      setUpdate((update) => update + 1);
      const response = await postdata({ ...data, likes: 0 });
      console.log(response);
      if (!response) throw new Error("Problem with request");
    } catch (error) {
      alert(error.message);
      setError(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handlePost)} noValidate>
        <div>
          <label htmlFor="userName">User Name:</label>
          <input
            className="text-black"
            type="text"
            id="userName"
            {...register("userName", {
              required: "User Name is required",
            })}
          />
          <div className="error">{errors.userName?.message}</div>
        </div>

        <div>
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

        <div>
          <label htmlFor="channel">Favourite channel:</label>
          <input
            className="text-black"
            type="text"
            id="channel"
            {...register("channel")}
          />
        </div>

        <input type="submit" value="Submit" />
      </form>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Form;
