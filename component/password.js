import React, { useRef } from "react";

const Password = ({ onChange }) => {
  var passwordRef = useRef(null);

  const handlePasswordChange = (e) => {
    passwordRef.current.value = e.target.value;
    onChange({
      target: {
        name: "password",
        value: e.target.value,
      },
    });
  };
  return (
    <>
      <label>
        Password
        <input
          type="password"
          name="password"
          style={{ padding: 10, marginTop: 10 }}
          ref={passwordRef}
          onChange={handlePasswordChange}
        ></input>
      </label>
    </>
  );
};
export default Password;
