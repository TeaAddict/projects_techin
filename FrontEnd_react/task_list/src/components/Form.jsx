import { useForm } from "react-hook-form";
import { postData } from "../helpers/post";
import { updateData } from "../helpers/update";

const Form = ({ setOpen, defaultData, setIsUpdate }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: defaultData?.name || "",
      priority: defaultData?.priority || "",
      status: defaultData?.status || "toDo",
      completed: defaultData?.completed || "0",
    },
  });

  const handleFormSubmit = async (data) => {
    try {
      if (defaultData) {
        await updateData(defaultData.id, data);
      } else {
        await postData(data);
      }
      setIsUpdate((isUpdate) => isUpdate + 1);
      setOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const priority = watch("priority");

  return (
    <div className="flex flex-col gap-5">
      <p className="text-xl font-bold">Task Form</p>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        className="flex flex-col gap-2"
      >
        <label className="flex flex-col gap-2">
          Task
          <input
            {...register("name", { required: "Need task name" })}
            placeholder="Enter task name"
            className="rounded-xl"
          />
          {errors.name && (
            <p className="text-red-500 col-span-2 flex justify-center">
              {errors.name.message}
            </p>
          )}
        </label>

        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <p>Priority</p>
            <div
              className="flex gap-4"
              {...register("priority", { required: "Select a priority" })}
            >
              <button
                type="button"
                className={`${
                  priority == "high"
                    ? "bg-red-500 text-white"
                    : "bg-white text-red-500"
                } border-2 border-red-500 font-[500] w-[5.6rem] rounded-lg py-1`}
                onClick={() => {
                  clearErrors("priority");
                  setValue("priority", "high");
                }}
              >
                High
              </button>
              <button
                type="button"
                className={`${
                  priority == "medium"
                    ? "bg-yellow-400 text-white"
                    : "bg-white text-yellow-400"
                } border-2 border-yellow-400 font-[500] w-[5.6rem] rounded-lg py-1`}
                onClick={() => {
                  clearErrors("priority");
                  setValue("priority", "medium");
                }}
              >
                Medium
              </button>
              <button
                type="button"
                className={`${
                  priority == "low"
                    ? "bg-green-500 text-white"
                    : "bg-white text-green-500"
                } border-2 border-green-500 font-[500] w-[5.6rem] rounded-lg py-1`}
                onClick={() => {
                  clearErrors("priority");
                  setValue("priority", "low");
                }}
              >
                Low
              </button>
            </div>
          </div>
          {errors.priority && (
            <p className="text-red-500">{errors.priority.message}</p>
          )}
        </div>

        <input {...register("completed")} defaultValue={0} className="hidden" />
        <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <input
            type="submit"
            onClick={handleFormSubmit}
            className="inline-flex w-full justify-center rounded-md bg-green-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-400 sm:ml-3 sm:w-auto"
            value="Submit"
          />

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
