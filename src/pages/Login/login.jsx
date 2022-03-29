import React, { useState } from "react";
import { useNavigate, usestate } from "react-router-dom";
import styles from "./logIn.module.css";

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");

const handleSubmit = (e) => {
  e.preventDefault();
  const User = { email, password };

  fetch("https://pcmarkt.herokuapp.com/login", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(User),
  });
};

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.father}>
      <form className={styles.body}>
        <div className={styles.formulary}>
          <h4>Iniciar sesión</h4>
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            placeholder="E-mail"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            placeholder="Contraseña"
          />
          <br />
          <button
            onSubmit={handleSubmit}
            className={styles.button}
            type="submit"
          >
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
