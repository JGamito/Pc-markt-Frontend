import React from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Checkout</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/")}>Home</button>
    </>
  );
};

export default Checkout;
