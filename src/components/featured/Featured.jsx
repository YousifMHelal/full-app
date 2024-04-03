import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.discount}>30% OFF</h1>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>Over-Ear Noise Cancelling Headphones</h2>
        <p className={styles.disc}>
          Discover amazing deals on our top products! Limited-time offers
          available now. Hurry, while supplies last!
        </p>
        <button className={styles.btn}>shop now</button>
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.img}
          src="/headphone.png"
          width={450}
          height={450}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};

export default Featured;
