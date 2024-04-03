// MyDropdown.js
import React, { useState } from "react";
import styles from "./dropdownMenu.module.css";
import { GoPlus } from "react-icons/go";
import { FcMinus } from "react-icons/fc";

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.dropdown}>
      <div className={styles.dropdownHeader} onClick={toggleMenu}>
        <p>{title}</p>
        {isOpen ? (
          <FcMinus className={styles.icon} />
        ) : (
          <GoPlus className={styles.icon} />
        )}
      </div>

      <div className={`${styles.dropdownContent} ${isOpen ? styles.open : ""}`}>
        {items.map((item) => (
          <label key={item.id} className={styles.option}>
            <input type="checkbox" /> {item.label}
          </label>
        ))}
      </div>
    </div>
  );
};

export default DropdownMenu;
