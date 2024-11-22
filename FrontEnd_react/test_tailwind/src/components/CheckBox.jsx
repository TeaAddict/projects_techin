import { useState } from "react";

const CheckBox = () => {
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    const eventTarget = e.target;

    const reg =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (reg.test(eventTarget.value)) {
      console.log("True");
    } else {
      console.log("False");
    }
  };

  return (
    <>
      <form noValidate>
        <label htmlFor="vehicle1">Enter email: </label>
        <input
          type="text"
          id="vehicle1"
          name="vehicle1"
          value={email}
          onChange={handleChange}
        />
      </form>

      <p>{email}</p>
    </>
  );
};

export default CheckBox;
