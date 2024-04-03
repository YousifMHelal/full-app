import React from "react";
import styles from "./categoryCard.module.css";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <div className={styles.container}>
      <Image
        src="/iphone13_pro_max_graphite.png"
        alt="phone"
        width={50}
        height={65}
      />
      <h6 className={styles.title}>Smart phone</h6>
    </div>
  );
};

export default CategoryCard;
