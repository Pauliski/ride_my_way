import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "./Context/SidebarContext";
import { Email, Input, Number, Password } from "./element/Input";
import Layout1 from "./LayerOne";
import { Link, useHistory } from "react-router-dom";
import { Option, OptionDefault, Select } from "./Select";
import { RegisterUser } from "./store/actions/types/userAction";
import { useDispatch, connect } from "react-redux";

const Signup = ({ error }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isOpen } = useContext(SidebarContext);
  const [err, setErr] = useState({});
  const [body, setBody] = useState({});
  const [disable, setDisable] = useState(false);
  useEffect(() => {
    setErr(err);
    const value = Object.values(err);
    if (value.some((item) => item === false)) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [err]);
  const inputField1 = ["Username", "Email Adress", "Mobile Number"];

  // eslint-disable-next-line no-useless-escape
  const passwordError = /^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=/]).*$/;
  const firstNameError = /^[a-zA-Z\-]{2,}$/g;
  const emailError = /^[a-zA-Z0-9]+@(gmail||hotmail||yahoo)\.(com)$/;
  const mobileError = /^(\+234)?[0-9]{10,11}$/;

  const handleOnBlur = (e) => {
    const { value, name } = e.target;
    if (name === "firstName" || "lastName")
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
  }

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setBody({ ...body, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    RegisterUser(body, dispatch, history);
  };

  return (
    <Layout1>
      {" "}
      <div>
        <div className={`loginPage ${isOpen ? false : ""}`}>
          <div className="head">
            <h1>Ride-my-way</h1>
            <div
              style={{
                backgroundColor: "transparent",
                position: "relative",
              }}
            >
              <hr className="underline signup_text" />
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="loginForm signupForm">
              <div style={{ color: "red" }}>{error}</div>
              <Input
                holder="First name"
                onChange={handleChange}
                onBlur={handleOnBlur}
                name="firstName"
                error={err.firstName}
                message="eg smith"
              />
              <Input
                holder="Last name"
                onChange={handleChange}
                onBlur={handleOnBlur}
                name="lastName"
                error={err.lastName}
                message="eg. John"
              />

              <Email
                holder="example@example.com"
                onChange={handleChange}
                onBlur={handleOnBlur}
                name="email"
                error={err.email}
                message="eg. xyz@yahoo.com, xyz@gmail.com, xyz@hotmail.com"
              />
              <Password
                holder="Enter your password"
                onChange={handleChange}
                onBlur={handleOnBlur}
                name="password"
                error={err.password}
                message="eg must have at one uppercase, lowercase, symbol, number and minimum length of 8"
              />
              <Number
                name="mobileNumber"
                onChange={handleChange}
                onBlur={handleOnBlur}
                error={err.mobile}
                holder="mobile number"
                message="Invalid format"
              />
              <Select
                title="gender: "
                name="gender"
                handleChange={handleSelectChange}
              >
                <OptionDefault />
                <Option value="male" name="Male" />
                <Option value="female" name="Female" />
              </Select>

              <span className="loginSpan">
                <input
                  type="submit"
                  className="loginButton"
                  value="Sign Up"
                  disabled={disable}
                />
                Existing Users
                <Link to="/login" style={{ color: "black" }}>
                  <span className="linkToSignup">Sign In</span>
                </Link>
              </span>
            </form>
          </div>
        </div>
      </div>
    </Layout1>
  );
};
const mapStateToProps = (state) => {
  return {
    error: state.user.isError,
  };
};

export default connect(mapStateToProps)(Signup);
