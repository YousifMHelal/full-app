import React from "react";
import styles from "./footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.connect}>
          <h3 className={styles.title}>
            Connect with <span>SwiftCart</span>
          </h3>
          <div className={styles.social}>
            <FaFacebookF className={styles.link} />
            <FaInstagram className={styles.link} />
            <FaTwitter className={styles.link} />
            <FaWhatsapp className={styles.link} />
          </div>
        </div>
        <p className={styles.text}>
          Sign up for our newsletter to stay updated on the latest trends and
          exclusive offers.
        </p>
      </div>
      <p className={styles.footer}>
        © 2023 swiftCart. All rights reserved. | Terms of Service | Privacy
        Policy
      </p>
    </div>
  );
};

export default Footer;
