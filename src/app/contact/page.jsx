import React from "react";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}> Contact with us</h3>
      <form className={styles.form}>
        <input
          className={styles.input}
          required
          type="text"
          placeholder="Full name"
        />
        <input
          className={styles.input}
          required
          type="email"
          placeholder="email address"
        />
        <textarea
          className={styles.input}
          required
          cols="30"
          rows="7"
          placeholder="Subject"></textarea>
        <button className={styles.btn} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
