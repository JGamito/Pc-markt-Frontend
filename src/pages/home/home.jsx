import React from "react";
import CategoriesSidebar from "../../components/categoriesSidebar/categoriesSidebar";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Home</h1>
      <CategoriesSidebar />
    </div>
  );
};

export default Home;
