import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../../../Context/SidebarContext";
import { Link, useHistory } from "react-router-dom";
import { RegisterUser } from "../../../store/actions/types/userAction";
import { useDispatch, connect } from "react-redux";
import "./SignupForm.css";
import Input from "../../reuseable/input/Input";
import Navbar from "../../NavbarSpecial/Navbar";
import Sidebar from "../../SidebarSpecial/Sidebar";
const SignupForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen } = useContext(SidebarContext);
  const [err, setErr] = useState({});
  const [body, setBody] = useState({});
  const [disable, setDisable] = useState(false);
  const [sidebarOpen, setsidebarOpen] = useState(false);

  const inputField1 = ["Username", "Email Adress", "Mobile Number"];
  // eslint-disable-next-line no-useless-escape
  const passwordError = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=/]).*$/;
  const firstNameError = /^[a-zA-Z\-]{2,}$/g;
  const emailError = /^[a-zA-Z0-9\.]+@(gmail||hotmail||yahoo)\.(com)$/;
  const mobileError = /^(\+234)?[0-9]{10,11}$/;

  const openSidebar = () => {
    setsidebarOpen(!sidebarOpen);
  };
  const handleOnBlur = (e) => {
    const { value, name } = e.target;
    if (name === "firstName" || "lastName") console.log(err, "body: ", body);
    setErr({ ...err, [name]: firstNameError.test(value) });
    if (name === "email") setErr({ ...err, [name]: emailError.test(value) });
    if (name === "password")
      setErr({ ...err, [name]: passwordError.test(value) });
    if (name === "mobileNumber")
      setErr({ ...err, [name]: mobileError.test(value) });
  };
  function handleChange(e) {
    const { value, name } = e.target;
    setBody({ ...body, [name]: value });
    setErr({ ...err, [name]: true });
  }
  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterUser(body, dispatch, history);
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
    <form onSubmit={handleSubmit} className="signup-form">
      <h1>Passenger's Sign-up </h1>
      <div className="form-content">
        <Input
          placeholder="First name"
          onChange={handleChange}
          onBlur={handleOnBlur}
          name="firstName"
          error={err.firstName}
          validFormat="eg Smith"
          required
        />
        <Input
          placeholder="Last name"
          onChange={handleChange}
          onBlur={handleOnBlur}
          name="lastName"
          error={err.lastName}
          validFormat="eg John"
          required
        />
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
        <Input
          inputType="number"
          placeholder="Mobile Number"
          onChange={handleChange}
          onBlur={handleOnBlur}
          name="mobileNumber"
          error={err.mobileNumber}
          validFormat="070********"
          required
        />
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SignupForm;
