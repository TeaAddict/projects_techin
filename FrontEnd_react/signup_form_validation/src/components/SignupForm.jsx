// import { DevTool } from "@hookform/devtools";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "a",
      email: "s@s.com",
      password: "asdfzxcv",
      confirmPassword: "asdfzxcv",
    },
  });

  const handleFormSubmit = (data) => {
    console.log(data);
    if (data.password !== data.confirmPassword) {
      console.log("setting error");
      setError("confirmPassword", {
        message: "Password does not match",
      });
      return;
    }
    alert("SUCCESS: " + JSON.stringify(data));
  };

  const handleReset = () => {
    console.log("RESETING");
    reset();
  };

  console.log("Errors:", errors);
  return (
    <div>
      <form
        onSubmit={handleSubmit(handleFormSubmit)}
        noValidate
        className="flex flex-col gap-3"
      >
        <label className="grid grid-cols-[1fr_2fr] items-center">
          Full Name
          <input
            {...register("fullName", { required: "Full name is required" })}
          />
          {errors.fullName && (
            <p className="text-red-600">{errors.fullName.message}</p>
          )}
        </label>
        <label className="grid grid-cols-[1fr_2fr] items-center">
          Email
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value:
                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
                message: "Bad email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-600">{errors.email.message}</p>
          )}
        </label>
        <label className="grid grid-cols-[1fr_2fr] items-center">
          Password
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum length of 8 is required",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600">{errors.password.message}</p>
          )}
        </label>
        <label className="grid grid-cols-[1fr_2fr] items-center">
          Confirm password
          <input
            {...register("confirmPassword", {
              required: "Confirm password is required",
            })}
          />
          {errors.confirmPassword && (
            <p className="text-red-600">{errors.confirmPassword.message}</p>
          )}
        </label>
        <div className="flex justify-center gap-4">
          <button type="submit" className="border-2 border-black p-1">
            Submit
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="border-2 border-black p-1"
          >
            Reset
          </button>
        </div>
      </form>
      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default SignupForm;
