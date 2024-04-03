import React from "react";
import styles from "./page.module.css";
import Featured from "@/components/featured/Featured";
import Categories from "@/components/categories/Categories";
import CardList from "@/components/cardList/CardList";
import FreeShipping from "@/components/freeShipping/FreeShipping";
import Brands from "@/components/brands/Brands";
import Features from "@/components/features/Features";

const page = () => {
  return (
    <div className={styles.container}>
      <Featured />
      <Categories />
      <CardList title="Popular Products" />
      <FreeShipping />
      <CardList title="Best Offers" />
      <Features />
      <CardList title="Newest products" />
      <Brands />
    </div>
  );
};

export default page;
