import React from "react";
import styles from "./loading.module.css";

const loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.pl1}>
        <div className={styles.pl1__a}></div>
        <div className={styles.pl1__b}></div>
        <div className={styles.pl1__c}></div>
      </div>
    </div>
  );
};

export default loading;
