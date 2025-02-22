import React, { useState } from "react";

const Email = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => setEmail(e.target.value);
  return (
    <>
      <label>
        Email
        <input
          type="email"
          name="email"
          style={{ padding: 10, marginTop: 10 }}
          placeholder="example@email.com"
          value={email}
          onChange={handleEmailChange}
        ></input>
      </label>
    </>
  );
};

export default Email;
