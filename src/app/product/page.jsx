"use client";

import React, { useState } from "react";
import styles from "./product.module.css";
import Image from "next/image";
import { CiStar } from "react-icons/ci";

const Product = () => {
  const [qty, setQty] = useState(1);
  const handelIncrease = () => {
    setQty(qty + 1);
  };
  const handelDecrease = () => {
    if (qty === 1) {
      return;
    }

    setQty(qty - 1);
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/iphone13_pro_max_graphite.png"
          className={styles.img}
          fill
          alt="product"
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>iPhone 13 Pro Max</h2>
        <h4 className={styles.price}>1200$</h4>
        <div className={styles.reviews}>
          <CiStar className={styles.icon} />
          <CiStar className={styles.icon} />
          <CiStar className={styles.icon} />
          <CiStar className={styles.icon} />
          <CiStar className={styles.icon} />
          <span>reviews</span>
        </div>
        <p className={styles.desc}>
          Enjoy crystal-clear sound and hassle-free...
        </p>
        <p className={styles.about}>
          <span className={styles.name}> Category:</span> Phone
        </p>
        <p className={styles.about}>
          <span className={styles.name}> brand:</span> apple
        </p>
        <p className={styles.stock}>
          <span className={styles.name}> in stock:</span> in stock
        </p>
        <div className={styles.colors}>
          <p className={styles.name}>colors: </p>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
          <div className={styles.color}></div>
        </div>

        <div className={styles.qty}>
          <p className={styles.name}>quantity: </p>
          <button className={styles.minus} onClick={handelDecrease}>
            -
          </button>
          <p className={styles.num}>{qty}</p>

          <button className={styles.plus} onClick={handelIncrease}>
            +
          </button>
        </div>
        <div className={styles.btn}>add to cart</div>
      </div>
    </div>
  );
};

export default Product;
