"use client";

import React, { useState } from "react";
import styles from "./navbar.module.css";
import Link from "next/link";
import { MdOutlineShoppingBag, MdSpaceDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { IoCloseSharp, IoSearch } from "react-icons/io5";
import Cart from "../cart/Cart";
import { GiHamburgerMenu } from "react-icons/gi";
import SearchBar from "../searchBar/SearchBar";
import { IoIosLogOut } from "react-icons/io";
import { GoHeart } from "react-icons/go";
import { signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);

  const { status, data } = useSession();

  return (
    <div className={styles.container}>
      {/* Navbar Links */}
      <div className={styles.links}>
        <Link href="/" className={styles.link}>
          home
        </Link>
        <Link href="/shop" className={styles.link}>
          products
        </Link>
        <Link href="/about" className={styles.link}>
          about
        </Link>
        <Link href="/contact" className={styles.link}>
          contact
        </Link>
      </div>

      {/* Mobile navbar responsive menu */}
      {open ? (
        <IoCloseSharp
          onClick={() => setOpen(!open)}
          className={styles.burger}
        />
      ) : (
        <GiHamburgerMenu
          className={styles.burger}
          onClick={() => setOpen(!open)}
        />
      )}

      {open && (
        <div className={styles.responsiveMenu}>
          <Link onClick={() => setOpen(!open)} href="/">
            home
          </Link>
          <Link onClick={() => setOpen(!open)} href="/shop">
            products
          </Link>
          <Link onClick={() => setOpen(!open)} href="/about">
            about
          </Link>
          <Link onClick={() => setOpen(!open)} href="/contact">
            contact
          </Link>
        </div>
      )}

      {/* Logo */}
      <h2 className={styles.logo}>SwiftCart</h2>

      {/* Sign in button and user option */}
      <div className={styles.option}>
        <SearchBar isSearchVisible={isSearchVisible} />
        <div className={styles.search}>
          <IoSearch
            onClick={() => setSearchVisible(!isSearchVisible)}
            style={{ cursor: "pointer" }}
          />
        </div>
        {/* Cart */}
        {status === "unauthenticated" ? (
          <Link href="/login" className={styles.link}>
            Login
          </Link>
        ) : (
          <>
            <div className={styles.cart}>
              <MdOutlineShoppingBag onClick={() => setIsCart(!isCart)} />
              <Cart isCart={isCart} setIsCart={setIsCart} />
            </div>
            <div className={styles.dropdown}>
              <div className={styles.user}>
                <FaRegUser />
                <FaAngleDown />
              </div>
              <div className={styles.menu}>
                <div className={styles.username}>
                  <p className={styles.welcome}>Welcome</p>
                  <h5 className={styles.name}>{data?.user?.name}</h5>
                </div>
                <Link href="/wishlist" className={styles.list}>
                  <GoHeart />
                  wishlist
                </Link>
                <Link href="/dashboard" className={styles.list}>
                  <MdSpaceDashboard />
                  Dashboard
                </Link>
                <div className={styles.list} onClick={signOut}>
                  <IoIosLogOut />
                  logout
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
