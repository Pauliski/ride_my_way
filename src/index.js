import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SidebarContextProvider from "./Context/SidebarContext"
import {AuthContextProvider} from './Context/AuthContext'
import store from './app/store'
import { Provider } from 'react-redux'
import App from "./App";
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <AuthContextProvider>
        <SidebarContextProvider>
          <BrowserRouter>
          <App />
          </BrowserRouter>
        </SidebarContextProvider>
      </AuthContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
