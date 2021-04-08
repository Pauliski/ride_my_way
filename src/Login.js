import React, { useContext } from "react";
import { SidebarContext } from "./Context/SidebarContext";
import Input from "./Input";
import {Link} from '@reach/router'
import Layout1 from "./LayerOne";


const Login = () => {
  const { isOpen } = useContext(SidebarContext);

  return (
    <Layout1>
        
      <div className={`loginPage ${isOpen ? false : ""}`}>
          <div className='head'> 
              <h1 >Ride-my-way</h1>
              <div style={{backgroundColor: 'transparent', position: 'relative'}}>
                  <hr className='underline'/>
              </div>
          </div>
          
        <form action="" className="loginForm">

          <Input type="text" placeholder="Username or Email" />
          <Input type="password" placeholder="Password" />
          <span className="loginSpan">
           <Link to='/dashboard'><button className="loginButton">Login</button></Link>
            New Users
            <a href="/signup" className="linkToSignup">
              {" "}
              Sign up
            </a>
          </span>
        </form>
      </div>
    </Layout1>
  );
};

export default Login;
