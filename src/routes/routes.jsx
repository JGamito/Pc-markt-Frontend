import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Page1 from "../pages/page1";
import Page2 from "../pages/page2";
import Page3 from "../pages/page3";

const Navigator = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/page1" element={<Page1 />} />
      <Route path="/page2" element={<Page2 />} />
      <Route path="/page3" element={<Page3 />} />
    </Routes>
  );
};
export default Navigator;
