import React, { useState } from "react";
import Email from "@/component/email";
import Name from "@/component/name";
import Password from "@/component/password";
import styles from "@/styles/Form.module.css";

const Form = () => {
  const [message, setMessage] = useState("");
  const initialValues = { name: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState("");

  const handleSubmit = (e) => {
    // prevent default submit
    e.preventDefault();
    if (!formValues.email) {
      setFormErrors("ERROR: Please provide an email.");
      setMessage("");
    } else if (!formValues.name) {
      setFormErrors("ERROR: Please provide a name.");
      setMessage("");
    } else {
      setMessage("Form submitted successfully!");
      setFormErrors("");
    }
  };
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValues((values) => ({ ...values, [name]: value }));
  };
  const formStyle = {
    padding: "20px",
    font: "inherit",
  };
  const btnStyle = {
    borderRadius: 5,
    border: "1px solid grey",
    padding: 10,
    marginTop: 5,
    marginLeft: 10,
    fontFamily: "inherit",
  };
  const errorStyle = {
    color: "#ff8b8b",
    marginTop: 10,
    marginLeft: 10,
  };
  const messageStyle = {
    color: "green",
    marginTop: 10,
    marginLeft: 10,
  };
  return (
    <>
      <form onSubmit={handleSubmit} style={formStyle}>
        <Name value={formValues.name} onChange={handleChange} className={styles.form} />
        <br />
        <Email value={formValues.email} onChange={handleChange} className={styles.form} />
        <br />
        <Password onChange={handleChange} className={styles.form} />
        <br />
        <button type="submit" style={btnStyle}>
          Submit
        </button>
        <div style={errorStyle}>{formErrors && <p>{formErrors}</p>}</div>
        <div style={messageStyle}>{message && <p>{message}</p>}</div>
      </form>
    </>
  );
};

export default Form;
