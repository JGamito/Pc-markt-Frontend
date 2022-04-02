import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetExtra, setStreetExtra] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      surname,
      email,
      password,
      street,
      city,
      province,
      postalCode,
      streetExtra,
      phone,
    };

    fetch("https://pcmarkt.herokuapp.com/login/login", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    });
  };

  return (
    <div className={styles.father}>
      <form className={styles.body} onSubmit={handleSubmit}>
        <div className={styles.formulary}>
          <h4>Crear cuenta</h4>
        </div>
        <div className={styles.input}>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nombre"
          />
          <input
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            type="text"
            placeholder="Apellidos"
          />
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
          <h5> Dirección:</h5>
          <input
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            placeholder="Calle / numero / piso"
          />
          <input
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
            placeholder="Localidad"
          />
          <input
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            type="text"
            placeholder="Provincia"
          />
          <input
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            type="text"
            placeholder="Codigo Postal"
          />
          <input
            value={streetExtra}
            onChange={(event) => setStreetExtra(event.target.value)}
            type="text"
            placeholder="Direccion alternativa"
          />
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            placeholder="Telefono"
            pattern="[0-9]{9}"
          />

          <br />
          <button className={styles.button} type="submit">
            registrarse!
          </button>
          <br />
        </div>
      </form>
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/home")}>Home</button>
      </div>
    </div>
  );
};
export default Register;
