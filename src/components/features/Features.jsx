import Image from "next/image";
import React from "react";
import styles from "./features.module.css";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/Free shipping-bro.png"
            width={200}
            height={180}
            alt="Free shipping-bro"
          />
        </div>
        <h5 className={styles.title}>Free Shipping</h5>
        <p className={styles.disc}>
          Enjoy free shipping on all orders! No minimum purchase required. Shop
          now!
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/Discount-cuate.png"
            width={200}
            height={180}
            alt="Discount-cuate"
          />
        </div>
        <h5 className={styles.title}>Best Offers</h5>
        <p className={styles.disc}>
          Unlock exclusive discounts today! Limited time offers available. Shop
          now and save!
        </p>
      </div>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.img}
            src="/Coronavirus Delivery Preventions-amico.png"
            width={200}
            height={180}
            alt="Coronavirus Delivery Preventions-amico"
          />
        </div>
        <h5 className={styles.title}>Speedy Delivery</h5>
        <p className={styles.disc}>
          Speedy delivery guaranteed! Get your items quickly with our fast
          delivery service. Order now!
        </p>
      </div>
    </div>
  );
};

export default Features;
