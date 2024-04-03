import Image from "next/image";
import React from "react";
import { FaTrash } from "react-icons/fa6";
import styles from "./wishlistCard.module.css";


const WishlistCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image
          className={styles.img}
          src="/iphone13_pro_max_graphite.png"
          width={50}
          height={60}
          alt="product"
        />
      </div>
      <h5 className={styles.item}>IPhone 13 Pro Max</h5>
      <p className={styles.item}>120$</p>
      <p className={styles.item}>in sock</p>
      <button className={styles.item}>add to cart</button>
      <FaTrash className={styles.item} />
    </div>
  );
};

export default WishlistCard;
