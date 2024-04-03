"use client";

import React, { useState } from "react";
import styles from "./registration.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const RegistrationPage = () => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.length < 8) {
      toast.error("Your password must be at least 8 characters long.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push("./login");
        toast.success("Account created successfully. Logging you in...");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "An error occurred while registering. Please try again later."
      );
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Create a new email</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="email"
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className={styles.input}
          type="password"
          placeholder="Your Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className={styles.registration}>
          <p className={styles.text}>Already have an email ?</p>
          <Link className={styles.link} href="/login">
            Sign in
          </Link>
        </div>
        <button className={styles.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationPage;
