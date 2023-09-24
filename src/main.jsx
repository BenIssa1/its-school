import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { UserContextProvider } from "./context/userContext/userConstext"
import './index.css'
import {BrowserRouter} from "react-router-dom/cjs/react-router-dom.min"

import { Provider } from "react-redux";
import store from "./store";

import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_RIGHT_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <UserContextProvider>
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      </UserContextProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
