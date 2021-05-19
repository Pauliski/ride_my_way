import React, { useState } from "react";
import "./Driver.css";
import { Link } from "@reach/router";
import useForm from "./useForm";
import validation from "./validation";
import { AiFillEyeInvisible } from "react-icons/ai";
import { FaEye } from "react-icons/fa";

const DriverSignup = () => {
  const {
    handleChange,
    handleFormSubmit,
    values,
    errors,
    agreeToTerms,
  } = useForm(validation);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  return (
    <div className="container">
      <div className="header">
        <h3>Register</h3>
        <p className="setup-account-info">
          Get your account set up in few minutes
        </p>
      </div>
      <form
        action=""
        className="main-form"
        onSubmit={handleFormSubmit}
        noValidate
      >
        <div className="form">
          <label htmlFor="firstName" className="label-text">
            First Name
          </label>
          <input
            value={values.firstName}
            type="text"
            placeholder="John"
            name="firstName"
            onChange={handleChange}
            required
            className={errors.firstName === undefined ? "" : "danger"}
          />
          {errors.firstName && <p className="errors"> {errors.firstName}</p>}
        </div>
        <div className="form">
          <label htmlFor="lastName" className="label-text">
            Last Name
          </label>
          <input
            value={values.lastName}
            type="lastName"
            placeholder="Doe"
            name="lastName"
            onChange={handleChange}
            required
            className={errors.lastName === undefined ? "" : "danger"}
          />
          {errors.lastName && <p className="errors"> {errors.lastName}</p>}
        </div>
        <div className="form">
          <label htmlFor="email" className="label-text">
            Email
          </label>
          <input
            value={values.email}
            type="email"
            placeholder="mail@mail.com"
            name="email"
            onChange={handleChange}
            required
            className={errors.email === undefined ? "" : "danger"}
          />
          {errors.email && <p className="errors"> {errors.email}</p>}
        </div>
        <div className="form">
          <label htmlFor="phoneNumber" className="label-text">
            Phone Number
          </label>
          <input
            value={values.phoneNumber}
            type="number"
            placeholder="070*******"
            name="phoneNumber"
            onChange={handleChange}
            required
            className={errors.phoneNumber === undefined ? "" : "danger"}
          />
          {errors.phoneNumber && (
            <p className="errors"> {errors.phoneNumber}</p>
          )}
        </div>
        <div className="form">
    <label htmlFor="plateNumber" className="label-text">
      Car Plate Number
    </label>
    <input
      value={values.plateNumber}
      type="text"
      placeholder="LAG*******"
      name="plateNumber"
      onChange={handleChange}
      required
      className={errors.plateNumber === undefined ? "" : "danger"}
    />
    {errors.plateNumber && (
            <p className="errors"> {errors.plateNumber}</p>
          )}
    </div>
        

        <div className="form">
          <label htmlFor="password" className="label-text">
            Password
          </label>
          {passwordShown ? (
            <FaEye
              onClick={togglePasswordVisiblity}
              className="fas fa-eye label-text show-password"
            />
          ) : (
            <AiFillEyeInvisible
              className="far fa-eye-slash label-text show-password"
              onClick={togglePasswordVisiblity}
            />
          )}
          <input
            value={values.password1}
            type={passwordShown ? "text" : "password"}
            placeholder="*********"
            name="password1"
            onChange={handleChange}
            required
            className={errors.password1 === undefined ? "" : "danger"}
          />
          {errors.password1 && <p className="errors"> {errors.password1}</p>}
        </div>
        <div className="form">
          <label htmlFor="confirm-password" className="label-text">
            Re-type Password
          </label>
          {passwordShown ? (
            <i
              onClick={togglePasswordVisiblity}
              className="fas fa-eye label-text show-password"
            ></i>
          ) : (
            <i
              className="far fa-eye-slash label-text show-password"
              onClick={togglePasswordVisiblity}
            ></i>
          )}
          <input
            value={values.confirmPassword}
            type={passwordShown ? "text" : "password"}
            placeholder="**********"
            name="confirmPassword"
            onChange={handleChange}
            required
            className={errors.confirmPassword === undefined ? "" : "danger"}
          />
          {errors.confirmPassword && (
            <p className="errors"> {errors.confirmPassword}</p>
          )}
        </div>
        <button className="login-btn">Register</button>
        <div className="check-box-container">
          <input
            name="agreeToTerms"
            type="checkbox"
            value={agreeToTerms}
            onChange={handleChange}
          />
          <p className="agreement-checked">
            I agree to the{" "}
            <span className="terms-conditions">Terms and Conditions</span>{" "}
          </p>
        </div>
        <div className="not_account_yet_container">
          <p>
            {" "}
            Already have an account?{" "}
            <Link to="/login">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
export default DriverSignup;
