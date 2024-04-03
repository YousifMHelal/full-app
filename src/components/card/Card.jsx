import React from "react";
import styles from "./card.module.css";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/iphone13_pro_max_graphite.png" alt="" fill />
      </div>
      <div className={styles.colors}>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
        <div className={styles.color}></div>
      </div>
      <h5 className={styles.title}>iPhone 13 Pro Max</h5>
      <p className={styles.desc}>
        Enjoy crystal-clear sound and hassle-free...
      </p>

      <h5 className={styles.price}>120$</h5>
      <div className={styles.action}>
        <div className={styles.btn}>add to cart</div>
        <div className={styles.wishlist}>
          <CiHeart />
        </div>
      </div>
    </div>
  );
};

export default Card;
