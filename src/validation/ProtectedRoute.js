import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import {Redirect, Route, withRouter} from 'react-router-dom' 
import Auth from '../auth'
import { currentUser } from '../features/passenger/userSlice';

function ProtectedRoute({component: Component, user, ...rest}) {
  const dispatch = useDispatch()
    // const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  let isAuthenticated = false
  const token = localStorage.getItem('jwtToken');
  if(token){
    isAuthenticated = true
  }

  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
    </div>
  );
}

export default withRouter(ProtectedRoute);
