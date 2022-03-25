import React from "react";
import { useNavigate } from "react-router-dom";

const Page3 = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>PAGE 3</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};
export default Page3;
