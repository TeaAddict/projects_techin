import { useForm } from "react-hook-form";
import { postData } from "../helpers/post";
import { updateData } from "../helpers/update";

const Form = ({ setOpen, defaultData, setIsUpdate }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: defaultData?.name || "",
      priority: defaultData?.priority || "",
      status: defaultData?.status || "",
      completed: defaultData?.completed || "",
    },
  });

  const handleFormSubmit = async (data) => {
    console.log(data);
    // try {
    //   if (defaultData) {
    //     await updateData(defaultData.id, data);
    //   } else {
    //     await postData(data);
    //   }
    //   setIsUpdate((isUpdate) => isUpdate + 1);
    //   setOpen(false);
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  const priority = watch("priority");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl font-bold">Task Form</p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-2"
      >
        <label className="grid grid-cols-[1fr_2fr] gap-2 text-start items-center">
          Task name
          <input
            {...register("name", { required: "Need task name" })}
            placeholder="Enter task name"
          />
          {errors.name && (
            <p className="text-red-500 col-span-2 flex justify-center">
              {errors.name.message}
            </p>
          )}
        </label>
        {/* <label className="grid grid-cols-[1fr_2fr] gap-2 text-start items-center">
          Priority
          <select {...register("priority", { required: "Need priority" })}>
            <option value="">Select priority</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          {errors.priority && (
            <p className="text-red-500 col-span-2 flex justify-center">
              {errors.priority.message}
            </p>
          )}
        </label> */}
        <div className="flex gap-4">
          <button
            className={`${
              priority == "high"
                ? "bg-red-500 text-white"
                : "bg-white text-red-500"
            } border-2 border-red-500 font-[500] w-[5.6rem] rounded-xl`}
            onClick={() => setValue("priority", "high")}
          >
            High
          </button>
          <button
            className={`${
              priority == "high"
                ? "bg-red-500 text-white"
                : "bg-white text-red-500"
            } border-2 border-red-500 font-[500] w-[5.6rem] rounded-xl`}
            onClick={() => setValue("priority", "medium")}
          >
            Medium
          </button>
          <button
            className={`${
              priority == "high"
                ? "bg-red-500 text-white"
                : "bg-white text-red-500"
            } border-2 border-red-500 font-[500] w-[5.6rem] rounded-xl`}
            onClick={() => setValue("priority", "low")}
          >
            Low
          </button>
        </div>

        <label className="grid grid-cols-[1fr_2fr] gap-2 text-start items-center">
          Status
          <select {...register("status", { required: "Need status" })}>
            <option value="">Select status</option>
            <option value="toDo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="done">Done</option>
          </select>
          {errors.status && (
            <p className="text-red-500 col-span-2 flex justify-center">
              {errors.status.message}
            </p>
          )}
        </label>
        {/* <label className="grid grid-cols-[1fr_2fr] gap-2 text-start items-center">
          Completed
          <input
            type="number"
            {...register("completed", {
              required: "Need percentage",
              pattern: {
                value: /^(\d|[1-9]\d|100)$/,
                message: "Need correct percentage",
              },
            })}
            placeholder="Enter percentage"
          />
          {errors.completed && (
            <p className="text-red-500 col-span-2 flex justify-center">
              {errors.completed.message}
            </p>
          )}
        </label> */}
        <input {...register("completed")} defaultValue={0} className="hidden" />
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <input
            type="submit"
            onClick={handleFormSubmit}
            className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto"
            value="Submit"
          />
          {/* Submit
          </input> */}
          <button
            type="button"
            data-autofocus
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
