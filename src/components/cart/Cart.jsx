import Image from "next/image";
import styles from "./cart.module.css";
import React from "react";
import { IoCloseSharp } from "react-icons/io5";
import Link from "next/link";

const Cart = ({ isCart, setIsCart }) => {
  return (
    <div className={`${styles.cartPage} ${isCart ? styles.active : ""}`}>
      <div className={styles.info}>
        <h6>Cart</h6>
        <IoCloseSharp
          onClick={() => setIsCart(false)}
          style={{ cursor: "pointer", color: "var(--accent)" }}
        />
      </div>
      <div className={styles.cartProducts}>
        <div className={styles.cartProduct}>
          <Image
            src="/iphone13_pro_max_graphite.png"
            width={50}
            height={65}
            alt="product"
          />
          <div className={styles.productInfo}>
            <h6>Name</h6>
            <p className={styles.productDesc}>Lorem ipsum dolor</p>
          </div>
          <div className={styles.productCheck}>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <p className={styles.price}>125$</p>
          </div>
        </div>
        <div className={styles.cartProduct}>
          <Image
            src="/iphone13_pro_max_graphite.png"
            width={50}
            height={65}
            alt="product"
          />
          <div className={styles.productInfo}>
            <h6>Name</h6>
            <p className={styles.productDesc}>Lorem ipsum dolor</p>
          </div>
          <div className={styles.productCheck}>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <p className={styles.price}>125$</p>
          </div>
        </div>
        <div className={styles.cartProduct}>
          <Image
            src="/iphone13_pro_max_graphite.png"
            width={50}
            height={65}
            alt="product"
          />
          <div className={styles.productInfo}>
            <h6>Name</h6>
            <p className={styles.productDesc}>Lorem ipsum dolor</p>
          </div>
          <div className={styles.productCheck}>
            <input
              className={styles.qty}
              type="number"
              defaultValue={1}
              min={1}
            />
            <p className={styles.price}>125$</p>
          </div>
        </div>
      </div>
      <Link href="/payment" className={styles.checkBtn}>
        Check out Total 500$
      </Link>
    </div>
  );
};

export default Cart;
