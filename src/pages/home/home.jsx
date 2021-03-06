import React from "react";
import CategoriesSidebar from "../../components/categoriesSidebar/categoriesSidebar";
import ProductGrid from "../../components/productGrid/productGrid";

const Home = () => {
  return (
    <div>
      <CategoriesSidebar />
      <ProductGrid />
    </div>
  );
};

export default Home;
