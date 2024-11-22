import { useState } from "react";

const ControlledComp1 = () => {
  const [fname, setFname] = useState("");

  return (
    <>
      <label htmlFor="fname">First name:</label>
      <input
        type="text"
        name="fname"
        id="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
        className="form-input"
      />
    </>
  );
};

export default ControlledComp1;
