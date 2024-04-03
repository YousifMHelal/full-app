import React from "react";
import styles from "./wishlist.module.css";
import { GoHeart } from "react-icons/go";
import WishlistCard from "@/components/wishlistCard/WishlistCard";

const WishlistPage = () => {
  return (
    <div className={styles.container}>
      <GoHeart className={styles.icon} />
      <h3 className={styles.title}>My wishlist</h3>
      <div className={styles.info}>
        <p>product</p>
        <p>Name</p>
        <p>price</p>
        <p>stock status</p>
        <p>cart</p>
        <p>delete</p>
      </div>
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
      <WishlistCard />
    </div>
  );
};

export default WishlistPage;
