import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/use-auth";
import styles from "./register.module.css";
import { toast, ToastContainer } from "react-toastify";

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
  const [status, setStatus] = useState("");
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("active");

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
      status,
    };
    try {
      const token = await register(user);
      if (token) {
        navigate("/");
      }
    } catch (error) {
      toast.error("Complete todos los campos para registrarse", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div className={styles.father}>
      <div>
        <h4>Crear cuenta</h4>
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputs}>
          <label>Nombre:</label>
          <input
            className={styles.input}
            value={name}
            onChange={(event) => setName(event.target.value)}
            type="text"
            placeholder="Nombre"
          />

          <input
            className={styles.input}
            value={surname}
            onChange={(event) => setSurname(event.target.value)}
            type="text"
            placeholder="Apellidos"
          />
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
          <h5> Dirección:</h5>
          <input
            className={styles.input}
            value={street}
            onChange={(event) => setStreet(event.target.value)}
            type="text"
            placeholder="Calle / numero / piso"
          />
          <input
            className={styles.input}
            value={city}
            onChange={(event) => setCity(event.target.value)}
            type="text"
            placeholder="Localidad"
          />
          <input
            className={styles.input}
            value={province}
            onChange={(event) => setProvince(event.target.value)}
            type="text"
            placeholder="Provincia"
          />
          <input
            className={styles.input}
            value={postalCode}
            onChange={(event) => setPostalCode(event.target.value)}
            type="number"
            placeholder="Codigo Postal"
            pattern="[0-9]{5}"
          />
          <input
            className={styles.input}
            value={streetExtra}
            onChange={(event) => setStreetExtra(event.target.value)}
            type="text"
            placeholder="Direccion alternativa"
          />
          <input
            className={styles.input}
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            placeholder="Telefono"
            pattern="[0-9]{9}"
          />

          <br />
          <div className={styles.buttonDiv}>
            <button className={styles.btn} type="submit">
              Crear cuenta
            </button>
          </div>
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
