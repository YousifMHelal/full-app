import React from "react";
import styles from "./freeShipping.module.css";
import Image from "next/image";

const FreeShipping = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="/free-shipping.png"
          width={450}
          height={450}
          alt="free-shipping"
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Free Shipping on All Orders!</h2>
        <p className={styles.disc}>
          Get free shipping on all orders - no minimum purchase required! Shop
          now and save on delivery costs!
        </p>
        <button className={styles.btn}>shop now</button>
      </div>
    </div>
  );
};

export default FreeShipping;
