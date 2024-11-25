import { useForm } from "react-hook-form";

const DriversForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: { age: "", hasLicense: "", licenseNumber: "" },
  });

  const currentAge = watch("age");
  const hasLicense = watch("hasLicense");

  const handleFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="flex flex-col gap-3 items-center"
      >
        <label className="flex flex-col gap-2 items-center">
          Age
          <input
            {...register("age", {
              required: "Age is required",
              pattern: {
                value: /^(?:1[9-9]\d*|[2-9]\d{2,})$/g,
                message: "Has to be older than 18",
              },
            })}
          />
          {errors.age && <p className="text-red-600">{errors.age.message}</p>}
        </label>
        {currentAge > 18 && (
          <label className="flex flex-col gap-2 items-center">
            Do you have a driving license?
            <select
              {...register("hasLicense", {
                pattern: { value: /^yes$/g, message: "Has to have a license" },
              })}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            {errors.hasLicense && (
              <p className="text-red-600">{errors.hasLicense.message}</p>
            )}
          </label>
        )}
        {hasLicense == "yes" && (
          <label className="flex flex-col gap-2 items-center">
            License Number
            <input
              {...register("licenseNumber", {
                required: "License number is required",
              })}
            />
            {errors.licenseNumber && (
              <p className="text-red-600">{errors.licenseNumber.message}</p>
            )}
          </label>
        )}
        <div className="flex justify-center">
          <button className="border-2 border-black p-1">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default DriversForm;
