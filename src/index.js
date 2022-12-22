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
  apiKey: process.env.FIRESTORE_API_KEY,
  authDomain: process.env.FIRESTORE_AUTH_DOMAIN,
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

reportWebVitals();
