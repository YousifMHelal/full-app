import React from "react";
import styles from "./shop.module.css";
import Filter from "@/components/filter/Filter";
import Card from "@/components/card/Card";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <h4 className={styles.title}>Shop now</h4>
      <div className={styles.wrapper}>
        <Filter className={styles.Filter} />
        <div className={styles.products}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
