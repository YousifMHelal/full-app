import React from "react";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <b>Company Name:</b> <span>SwiftCart</span>
      </p>
      <p className={styles.text}>
        <b>Mission Statement:</b> Our mission at <span>SwiftCart</span> is to
        provide customers with premium quality products and exceptional service,
        ensuring a delightful shopping experience every time.
      </p>
      <p className={styles.text}>
        <b>Founder Story: </b> <span>SwiftCart</span> was founded in 2010 by
        John Doe, a passionate entrepreneur with a vision to create an online
        marketplace that offers a curated selection of handcrafted goods from
        around the world.
      </p>
      <p className={styles.text}>
        <b>Location </b> Headquarters located in the vibrant city of New
        Harmony, nestled in the heart of the countryside.
      </p>
      <p className={styles.text}>
        <b>Product Range: </b> <span>SwiftCart</span> offers a diverse range of
        products including artisanal crafts, gourmet foods, fashion accessories,
        and home decor items.
      </p>
      <p className={styles.text}>
        <b>Customer Commitment: </b> We are committed to exceeding customer
        expectations by offering prompt shipping, hassle-free returns, and
        personalized customer support.
      </p>
      <p className={styles.text}>
        <b>Quality Standards: </b> Each product available at{" "}
        <span>SwiftCart</span>
        undergoes rigorous quality checks to ensure superior craftsmanship and
        durability.
      </p>
      <p className={styles.text}>
        <b>Community Involvement: </b> <span>SwiftCart</span> is proud to
        support local artisans and small businesses by featuring their products
        on our platform. We also contribute a portion of our profits to
        charitable organizations dedicated to environmental conservation and
        social welfare.
      </p>
      <p className={styles.text}>
        <b>Contact Information: Email: </b> Email: contact@SwiftCart.com, Phone:
        1-800-555-1234
      </p>
      <p className={styles.text}>
        <b>Testimonials: </b> I love shopping at <span>SwiftCart!</span> The
        products are unique and of the highest quality. - Sarah J., satisfied
        customer.
      </p>
      <p className={styles.text}>
        <b>Legal Information: </b> Terms of Service and Privacy Policy available
        on our website.
      </p>
    </div>
  );
};

export default AboutPage;
