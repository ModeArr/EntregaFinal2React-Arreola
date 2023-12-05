import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css' 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyCDtYxWERwfIzegQ-DN1Oj3j6kqWB72WaY",
  authDomain: "tienda-mastergym.firebaseapp.com",
  projectId: "tienda-mastergym",
  storageBucket: "tienda-mastergym.appspot.com",
  messagingSenderId: "82206531551",
  appId: "1:82206531551:web:dfc391de4f30b32c212e6a",
  measurementId: "G-TWQBW2PD6X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
