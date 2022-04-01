import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import Register from "../pages/register/register";
import Login from "../pages/Login/login";
import Checkout from "../pages/checkout";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/categories/:category" element={<Checkout />} />
    </Routes>
  );
};

export default Navigator;
