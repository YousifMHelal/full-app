import React from "react";
import Card from "../card/Card";
import styles from "./cardList.module.css";

const CardList = ({ title }) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <div className={styles.title}>{title}</div>
        <div className={styles.more}>see all</div>
      </div>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardList;
