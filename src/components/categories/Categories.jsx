import React from "react";
import styles from "./categories.module.css";
import CategoryCard from "../categoryCard/CategoryCard";

const Categories = () => {
  return (
    <div className={styles.container}>
      <h3>Categories</h3>
      <div className={styles.Categories}>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
};

export default Categories;
