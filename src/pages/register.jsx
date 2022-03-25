import React from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Register</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};
export default Register;
