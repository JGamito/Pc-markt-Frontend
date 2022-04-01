import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./register.module.css";

const Register = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.father}>
      <h1 className={styles.title}>Register</h1>
      <>
        <button onClick={() => navigate(-1)}>Back</button>
        <button onClick={() => navigate("/")}>Home</button>
      </>
    </div>
  );
};
export default Register;
