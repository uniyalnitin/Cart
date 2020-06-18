import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAW01S5KvNeQrNhVUdOd6ZutKfh8Lnv5Bs",
  authDomain: "cart-web-app-eb3b6.firebaseapp.com",
  databaseURL: "https://cart-web-app-eb3b6.firebaseio.com",
  projectId: "cart-web-app-eb3b6",
  storageBucket: "cart-web-app-eb3b6.appspot.com",
  messagingSenderId: "793901482059",
  appId: "1:793901482059:web:c73a7994a93c06b85c0dce",
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(<App />, document.getElementById("root"));
