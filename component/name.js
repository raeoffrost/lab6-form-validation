import React, { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");
  const handleNameChange = (e) => setName(e.target.value);
  return (
    <>
      <label>
        Name
        <input
          type="name"
          name="name"
          style={{ padding: 10, marginTop: 10 }}
          placeholder="Enter your name"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
    </>
  );
};

export default Name;
