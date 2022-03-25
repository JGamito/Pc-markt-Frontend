import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1 style={{ marginTop: "50px" }}>Category</h1>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate("/home")}>Home</button>
    </>
  );
};

export default Category;
