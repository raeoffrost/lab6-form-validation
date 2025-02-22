import React, { useRef } from "react";

const Password = () => {
  var password = useRef(null);

  const handlePasswordChange = (e) => {
    password.current.value = e.target.value;
  };
  return (
    <>
      <label>
        Password
        <input
          type="password"
          name="password"
          style={{ padding: 10, marginTop: 10 }}
          ref={password}
          onChange={handlePasswordChange}
        ></input>
      </label>
    </>
  );
};
export default Password;
