import React from "react";
import ReactDOM from "react-dom";
import "./Global/global.css";
import "./Global/navBar.css";
import NavBar from "./Global/Navbar.js";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>,
  document.getElementById("root")
);
