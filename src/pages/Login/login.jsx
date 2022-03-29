import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./logIn.module.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    
    e.preventDefault();
    console.log("function");
    const user = { email, password };

    fetch("https://pcmarkt.herokuapp.com/login/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    }).then((response) => console.log(response));
  };

  return (
    <div className={styles.father}>
      <form className={styles.body} onSubmit={handleSubmit}>
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
