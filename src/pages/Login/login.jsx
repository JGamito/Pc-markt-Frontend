import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./logIn.module.css";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.father}>
      <form className={styles.body}>
        <div className={styles.formulary}>
          <h4>Iniciar sesión</h4>
          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Contraseña" />
          <br />
          <button className={styles.button} type="submit">
            Iniciar sesión
          </button>
        </div>
      </form>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/home")}>Home</button>
      </div>
    </div>
  );
};
export default Login;
