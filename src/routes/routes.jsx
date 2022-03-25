import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Category from "../pages/category";
import Register from "../pages/register";
import Login from "../pages/login";
import Checkout from "../pages/checkout";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories/:id" element={<Category />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
    </Routes>
  );
};

export default Navigator;
