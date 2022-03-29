import React from "react";
import CategoriesSidebar from "../../components/categoriesSidebar/categoriesSidebar";
import ProductGrid from "../../components/productGrid/productGrid";
import NavBar from "../../components/navBar/navBar";

const Home = () => {
    return (
        <div>
            <NavBar />
            <CategoriesSidebar/>
            <ProductGrid />
        </div>
    )
};

export default Home;
