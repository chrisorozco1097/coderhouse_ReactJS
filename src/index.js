import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBWbBKcL9ig-13m3Hdso3DRcgwod12_Axg",
  authDomain: "reactjs-coderhouse-21b9e.firebaseapp.com",
  projectId: "reactjs-coderhouse-21b9e",
  storageBucket: "reactjs-coderhouse-21b9e.appspot.com",
  messagingSenderId: "186986396444",
  appId: "1:186986396444:web:c42ff4cde199c2007818d9"
};
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
