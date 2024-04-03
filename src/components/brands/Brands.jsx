import React from "react";
import styles from "./brands.module.css";
import { FaApple } from "react-icons/fa";
import {
  SiDell,
  SiHp,
  SiHuawei,
  SiLenovo,
  SiLg,
  SiMsibusiness,
  SiSamsung,
  SiSony,
  SiToshiba,
  SiXiaomi,
} from "react-icons/si";

const Brands = () => {
  return (
    <div className={styles.container}>
      <FaApple className={styles.brand} />
      <SiSamsung className={styles.brand} />
      <SiLenovo className={styles.brand} />
      <SiHp className={styles.brand} />
      <SiMsibusiness className={styles.brand} />
      <SiHuawei className={styles.brand} />
      <SiSony className={styles.brand} />
      <SiToshiba className={styles.brand} />
      <SiDell className={styles.brand} />
      <SiLg className={styles.brand} />
    </div>
  );
};

export default Brands;
