import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import {router} from './router/index.js'
import { CartContextProvider } from './contexts/CartContextProvider';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsz0s2Gj-VhjR2eBAar6vgU_m9jpdMwHA",
  authDomain: "coder-ecommerce-3b4c3.firebaseapp.com",
  projectId: "coder-ecommerce-3b4c3",
  storageBucket: "coder-ecommerce-3b4c3.appspot.com",
  messagingSenderId: "1082797712044",
  appId: "1:1082797712044:web:4cd6d1e5b5e41bd6b07509"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router}/>
    </CartContextProvider>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
