import React, { useContext } from "react";
import { SidebarContext } from "./Context/SidebarContext";
import Input from "./Input";
import Layout1 from "./LayerOne";

const Signup = () => {
  const { isOpen } = useContext(SidebarContext);
  const inputField1 = [
    "Username",
    "Email Adress",
    "Home Adress",
    "Mobile Number",
  ];
  const inputField2 = ["Password", "Confirm Password"];
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
                position: "relative"
              }}
            >
              <hr className="underline signup_text" />
            </div>
          </div>
          <form action="" className="loginForm signupForm">
            {inputField1.map((item) => (
              <Input key={item} type="text" placeholder={item} />
            ))}
            {inputField2.map((item) => (
              <Input type="password" placeholder={item} />
            ))}

            <span className="loginSpan">
              <button className="loginButton">Sign Up</button>
              Existing Users
              <a href="/login" className="linkToSignup">
                {" "}
                Sign In
              </a>
            </span>
          </form>
        </div>
      </div>
    </Layout1>
  );
};

export default Signup;
