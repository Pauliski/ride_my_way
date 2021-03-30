import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
 import {Router} from '@reach/router'
import Homepage from './Homepage';
import SidebarContextProvider from './Context/SidebarContext';
import Sidebar from './Sidebar';
import Login from './Login';


ReactDOM.render(
  <React.StrictMode>
    
    <SidebarContextProvider>
    <Sidebar />
    <Navbar />
    <Router>
    <Homepage path='/ride_my_way' />
      <Homepage path='/home' />
      <Homepage path='/' />
      <Login path='/user' />
      
    </Router>
    </SidebarContextProvider>
    
    
  </React.StrictMode>,
  document.getElementById('root')
);


