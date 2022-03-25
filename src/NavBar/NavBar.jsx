import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../logo.svg";

const NavBar = () => {
  return (
    <div className="container">
      <div className="links-container">
        <Link to="/home">
          <img
            className="App-logo"
            alt="logo"
            src={logo}
            width="150px"
            height="150px"
          />
        </Link>
        <Link className="links" to="/home">
          Home
        </Link>
        <Link className="links" to="/page1">
          Page 1
        </Link>
        <Link className="links" to="/page2">
          Page 2
        </Link>
        <Link className="links" to="/page3">
          Page 3
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
