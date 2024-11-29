import { useForm } from "react-hook-form";
import post from "../helpers/message/post";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      await post(data);
      alert("Successfully submitted");
      reset();
    } catch (error) {
      console.error(error);
      alert("Submit failed...");
    }
  };

  return (
    <div className="py-4 flex flex-col items-center gap-4">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p>If you got a question feel free to submit it!</p>
      <form
        className="flex flex-col gap-2"
        noValidate
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <label>
          <input
            {...register("name", { required: "Please enter your name" })}
            placeholder="Enter name"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </label>
        <label>
          <input
            {...register("email", {
              required: "Please enter your email",
              pattern:
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
            })}
            placeholder="Enter email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </label>
        <label>
          <textarea
            {...register("message", {
              required: "Please enter your message",
            })}
            placeholder="Enter message"
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </label>
        <button className="border-2 rounded-md py-1 hover:bg-gray-50">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
