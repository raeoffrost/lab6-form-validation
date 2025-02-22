import React, { useState } from "react";
import Email from "@/component/email";
import Name from "@/component/name";
import Password from "@/component/password";

const Form = () => {
  const [values, setValues] = useState("");
  const handleSubmit = (e) => {
    // prevent default submit
    e.preventDefault();
    if (!values) {
      setMessage("ERROR: Please fill form.");
    } else setMessage("Form submitted successfully!");
  };
  const formStyle = {
    padding: "20px",
    font: "inherit",
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Name />
        <Email />
        <Password />
        <br />
        <button
          type="submit"
          style={{ padding: 10, marginTop: 10, fontFamily: "inherit", borderRadius: 5 }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
