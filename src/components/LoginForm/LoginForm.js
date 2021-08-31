import React, { useEffect, useState } from "react";
import { Input, Password } from "../../element/Input";
import {driverLogin} from '../../store/actions/types/driverAction'
import { currentDriver } from "../../features/passenger/driverSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./LoginForm.css";

function LoginForm() {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const history = useHistory()
  const dispatch = useDispatch()
  const handleChange = (e)=>{
      const {name, value} = e.target
      setLoginDetails(prev => {
          return {...prev, [name]: value}
      })
  }
  const handleSubmit = (e)=>{
      e.preventDefault()
    driverLogin(loginDetails, dispatch, history)
  }
  return (
    <div>
      <div className="login-form">
          <h2>Driver Login</h2>
        <form action="" onSubmit={handleSubmit}>
          <Input Value={loginDetails.email} onChange={handleChange} name="email"/>
          <Password Value={loginDetails.password} onChange={handleChange} name="password"/>
          <button>Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
