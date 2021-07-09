import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {CartProvider} from "./CartContext"
import {VideoProvider} from "./VideoContext";
import {BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
  <VideoProvider>
  <CartProvider>
    <Router>
    <App />
    </Router>
  </CartProvider>
  </VideoProvider>
  ,
  document.getElementById('root')
);



