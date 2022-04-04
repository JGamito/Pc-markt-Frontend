import React from "react";
import { Link } from "react-router-dom";
import styles from "./navBar.module.css";
import logo from "../../logo.png";
import useAuth from "../../hooks/use-auth";

const NavBar = () => {
  const { logged } = useAuth();

  return (
    <div className={styles.container}>
      <div>
        <Link to="/">
          <img className={styles.logo} alt="logo" src={logo} />
        </Link>
      </div>

      {logged ? (
        <div className={styles.linksContainer}>
          <Link className={styles.links} to="/">
            Home
          </Link>

          <Link className={styles.links} to="/checkout">
            Carrito
          </Link>
          <Link className={styles.links} to="/">
            Desconectarme!
          </Link>
        </div>
      ) : (
        <div className={styles.linksContainer}>
          <Link className={styles.links} to="/">
            Home
          </Link>

          <Link className={styles.links} to="/register">
            Nuevo Usuario
          </Link>
          <Link className={styles.links} to="/login">
            Identificarme
          </Link>
        </div>
      )}
    </div>
  );
};
export default NavBar;

// delete TOKEN en Link "Desconectarme!"           Storage.removeItem("token")
// Actualizar la NavBar tras el Login para que detecte el token!!!
//
