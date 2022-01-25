import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import {Redirect, Route, withRouter} from 'react-router-dom' 
import Auth from '../auth'
import { currentDriver } from '../features/passenger/driverSlice';
import { getDriver, setDriverState } from '../store/actions/types/driverAction';

function PrivateRoute({component: Component, user, ...rest}) {
  const dispatch = useDispatch()
    // const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  let isAuthenticated = false
  const token = localStorage.getItem('driverToken');
  if(token){
    isAuthenticated = true
    // setDriverState(dispatch)
  }

  return (
    <div>
      <Route {...rest} render={props => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)} />
    </div>
  );
}

export default withRouter(PrivateRoute);
