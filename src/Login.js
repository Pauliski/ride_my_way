import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "./Context/SidebarContext";
import { Input, Password } from "./element/Input";
import { Link, useHistory } from "react-router-dom";
import Layout1 from "./LayerOne";
import { LoginUser } from "./store/actions/types/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const history = useHistory()
  
  const dispatch = useDispatch();
  const [body, setBody] = useState({});
  const { isOpen } = useContext(SidebarContext);
  useEffect(() => {
    setBody(body);
  }, [body]);

  function handleChange(e) {
    const { value, name } = e.target;
    if (name === "email") {
      setBody({ ...body, [name]: value });
    }
    if (name === "password") {
      setBody({ ...body, [name]: value });
    }
  }
  //Handle sumbmit function

  const handleSubmit = async (e) => {
    e.preventDefault();
    LoginUser(body, dispatch, history)
    
  };

  return (
    <Layout1>
      <div className={`loginPage ${isOpen ? false : ""}`}>
        <div className="head">
          <h1>Ride-my-way </h1>
          <div style={{ backgroundColor: "transparent", position: "relative" }}>
            <hr className="underline" />
          </div>
        </div>

        <form onSubmit={handleSubmit} className="loginForm">
          <Input
            holder="Username or Email"
            onChange={handleChange}
            name="email"
          />
          <Password
            type="password"
            holder="Password"
            onChange={handleChange}
            name="password"
          />
          <span className="loginSpan">
            <button className="loginButton">Login</button>
            New Users
            <Link to="/signup">
              <span className="linkToSignup">Sign up</span>
            </Link>
          </span>
        </form>
      </div>
    </Layout1>
  );
};

export default Login;
