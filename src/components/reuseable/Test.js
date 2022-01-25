import React, { useState } from "react";
import Input from "./input/Input";

const Test = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form>
      <Input
        inputType="email"
        value={value}
        onChange={handleChange}
        placeholder="example@example.com"
        required
      />
      <Input inputType="password" />
      <Input inputType="text" />
      <button>Submit</button>
    </form>
  );
};

export default Test;
