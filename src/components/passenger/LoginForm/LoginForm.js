import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../Context/SidebarContext";
import { Link, useHistory } from "react-router-dom";
import { LoginUser, RegisterUser } from "../../../store/actions/types/userAction";
import { useDispatch, connect } from "react-redux";
import "./LoginForm.css";
import Input from "../../reuseable/input/Input";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [err, setErr] = useState({});
  const [body, setBody] = useState({});
  const [disable, setDisable] = useState(false);

  const inputField1 = ["Username", "Email Adress", "Mobile Number"];
  // eslint-disable-next-line no-useless-escape
  const passwordError = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=/]).*$/;
  const emailError = /^[a-zA-Z0-9\.]+@(gmail||hotmail||yahoo)\.(com)$/;

  const handleOnBlur = (e) => {
    const { value, name } = e.target;
    if (name === "email") setErr({ ...err, [name]: emailError.test(value) });
    if (name === "password")
      setErr({ ...err, [name]: passwordError.test(value) });
  };
  function handleChange(e) {
    const { value, name } = e.target;
    setBody({ ...body, [name]: value });
    setErr({ ...err, [name]: true });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginUser(body, dispatch, history);
  };

  useEffect(() => {
    setErr(err);
    const value = Object.values(err);
    if (value.some((item) => item === false)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [err]);
  return (
    <form onSubmit={handleSubmit} className="login-form-wrapper">
      <h1>Passenger Login </h1>
      <div className="form-content">

        <Input
          inputType="email"
          placeholder="email"
          onChange={handleChange}
          onBlur={handleOnBlur}
          name="email"
          error={err.email}
          validFormat="eg xyz@yahoo.com, xyz@gmail.com, xyz@hotmail.com"
          required
        />
        <Input
          inputType="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleOnBlur}
          name="password"
          error={err.password}
          validFormat="eg must have at one uppercase, lowercase, symbol, number and minimum length of 8"
          required
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default LoginForm;
