import React, { useContext } from "react";
import { SidebarContext } from "./Context/SidebarContext";
import Input from "./Input";
import Layout1 from "./LayerOne";
import {Link} from '@reach/router';

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
             <Link to='/signup'><button className="loginButton">Sign Up</button></Link> 
              Existing Users
              <Link to='/login' className="linkToSignup">
                {" "}
                Sign In
              </Link>
            </span>
          </form>
        </div>
      </div>
    </Layout1>
  );
};

export default Signup;
