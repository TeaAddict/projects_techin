import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const YoutubeForm = () => {
  const { register } = useForm({
    defaultValues: {
      username: "",
      password: "",
      channel: "",
      email: "",
      favColor: "",
    },
  });
  return (
    <div>
      <form className="flex flex-col items-center gap-4">
        <h1 className="text-xl">Wow what a form</h1>
        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-[1fr_2fr] justify-between items-center gap-4">
            <label htmlFor="username">Username</label>
            <input
              {...register("username", { required: "Username is required" })}
              type="text"
              id="username"
              className="text-black"
            />
          </div>
          <div className="grid grid-cols-[1fr_2fr] justify-between items-center gap-4">
            <label htmlFor="username">Password</label>
            <input
              {...register("password", { required: "Username is required" })}
              type="text"
              id="password"
              className="text-black"
            />
          </div>
          <div className="grid grid-cols-[1fr_2fr] justify-between items-center gap-4">
            <h6>Favorite Channel</h6>
            <select
              {...register("channel", { required: "channel is required" })}
              id="channel"
              className="text-black"
            >
              <option value="">Select a channel</option>
              <option value="Code with Ania Kubow">Code with Ania Kubow</option>
              <option value="Kevin Powel">Kevin Powel</option>
              <option value="Net Ninja">Net Ninja</option>
            </select>
          </div>
          <div className="grid grid-cols-[1fr_2fr] justify-between items-center gap-4">
            <label htmlFor="username">email</label>
            <input
              {...register("email", { required: "email is required" })}
              type="text"
              id="email"
              className="text-black"
            />
          </div>
          <div>
            <h6>Choose your favorite color</h6>
            <div className="flex gap-2">
              <label className="flex gap-1 items-center">
                <input
                  {...register("favColor", {
                    required: "Please select a color",
                  })}
                  type="radio"
                  value="green"
                />
                Green
              </label>
              <label className="flex gap-1 items-center">
                <input
                  {...register("favColor", {
                    required: "Please select a color",
                  })}
                  type="radio"
                  value="blue"
                />
                Blue
              </label>
              <label className="flex gap-1 items-center">
                <input
                  {...register("favColor", {
                    required: "Please select a color",
                  })}
                  type="radio"
                  value="yellow"
                />
                Yellow
              </label>
            </div>
          </div>
          <div>
            <h6>Select Your Hobbies:</h6>
            <div className="flex gap-2">
              <label className="flex gap-1 items-center">
                <input
                  {...register("hobbies", {
                    required: "Please select at least one hobby",
                  })}
                  type="checkbox"
                  value="reading"
                />
                Reading
              </label>
              <label className="flex gap-1 items-center">
                <input
                  {...register("hobbies", {
                    required: "Please select at least one hobby",
                  })}
                  type="checkbox"
                  value="traveling"
                />
                Traveling
              </label>
              <label className="flex gap-1 items-center">
                <input
                  {...register("hobbies", {
                    required: "Please select at least one hobby",
                  })}
                  type="checkbox"
                  value="coding"
                />
                Coding
              </label>
            </div>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="border-2 border-white px-2 py-1">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default YoutubeForm;
