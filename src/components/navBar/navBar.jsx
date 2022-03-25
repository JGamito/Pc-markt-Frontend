import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import logo from "../../logo.svg";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <Link to="/home">
          <img
            className={styles.logo}
            alt="logo"
            src={logo}
            width="150px"
            height="150px"
          />
        </Link>
        <Link className={styles.links} to="/home">
          Home
        </Link>
        <Link className={styles.links} to="/page1">
          Page 1
        </Link>
        <Link className={styles.links} to="/page2">
          Page 2
        </Link>
        <Link className={styles.links} to="/page3">
          Page 3
        </Link>
      </div>
    </div>
  );
};
export default NavBar;
