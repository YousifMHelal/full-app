"use client";

import React, { useState } from "react";
import styles from "./filter.module.css";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import { TfiMenuAlt } from "react-icons/tfi";
import { IoCloseSharp } from "react-icons/io5";

const Filter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownItems1 = [
    { id: 1, label: "Option 1" },
    { id: 2, label: "Option 2" },
  ];

  const dropdownItems2 = [
    { id: 3, label: "Choice A" },
    { id: 4, label: "Choice B" },
    { id: 6, label: "Choice B" },
    { id: 8, label: "Choice B" },
  ];

  return (
    <>
      {/* Big filter */}
      <di className={styles.container}>
        <h5 className={styles.header}>
          Filter
          <TfiMenuAlt />
        </h5>
        {/* Dropdown menu */}
        <DropdownMenu title="Menu 1" items={dropdownItems1} />
        <DropdownMenu title="Menu 2" items={dropdownItems2} />
        <DropdownMenu title="Menu 2" items={dropdownItems2} />
        <DropdownMenu title="Menu 2" items={dropdownItems2} />
      </di>
      {/* Mobile filter */}
      <div className={styles.wrapper}>
        <h5 className={styles.SmallHeader} onClick={() => setIsOpen(!isOpen)}>
          Filter
          {isOpen ? (
            <IoCloseSharp className={styles.icon} />
          ) : (
            <TfiMenuAlt className={styles.icon} />
          )}
        </h5>
        {isOpen && (
          <div className={styles.menu}>
            <DropdownMenu title="Menu 1" items={dropdownItems1} />
            <DropdownMenu title="Menu 2" items={dropdownItems2} />
            <DropdownMenu title="Menu 2" items={dropdownItems2} />
            <DropdownMenu title="Menu 2" items={dropdownItems2} />
          </div>
        )}
      </div>
    </>
  );
};

export default Filter;
