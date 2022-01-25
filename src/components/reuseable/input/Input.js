import React, { useEffect, useState } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import {  GoDeviceMobile } from "react-icons/go"
import "./input.css";

const Input = ({
  inputType,
  placeholder,
  value,
  onChange,
  onBlur,
  className,
  error,
  validFormat,
  name,
  max,
  required,
}) => {
  const [icon, setIcon] = useState();
  useEffect(() => {
    if (inputType === "email") {
      setIcon(<MdEmail className="input-icon" />);
    }
    if (inputType === "text") {
      setIcon(<BsFillPersonFill className="input-icon" />);
    }
    if (inputType === "password") {
      setIcon(<RiLockPasswordFill className="input-icon" />);
    }
    if (inputType === "number") {
      setIcon(<GoDeviceMobile className="input-icon" />);
    }
  }, []);
  return (
    <div className="reuseable-input">
      <div className="icon-container">
        {icon}
      </div>

      <input
        className={`input-field ${className}`}
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        max={max}
        required={required}
      />
      <div
          className={`error-message ${
            error === undefined
              ? ""
              : error === true
              ? ""
              : "display-error"
          }`}
        >
          {validFormat}
        </div>
    </div>
    
  );
};

Input.defaultProps = {
  inputType: "text",
  className: "",
  required: false,
};

export default Input;
