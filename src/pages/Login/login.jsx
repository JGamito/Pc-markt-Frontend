import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./logIn.module.css";
import useAuth from "../../hooks/use-auth";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { email, password };
    login(user);
    navigate("/");
  };

  return (
    <div className={styles.father}>
      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.formulary}>
          <h4>Iniciar sesión</h4>
          <input
            className={styles.input}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <input
            className={styles.input}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Contraseña"
          />
          <br />
          <button className={styles.button} type="submit">
            INICIAR SESION
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
