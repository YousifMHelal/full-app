"use client";

import React, { useState } from "react";
import styles from "./login.module.css";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

const Login = () => {
  const { status } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (response?.ok) {
        toast.success("Logged in successfully!");
        router.push("/");
      } else {
        throw new Error("Invalid email or password.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [router, status]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login with your email</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
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
          <p className={styles.text}>{`Don't`} have an email ?</p>
          <Link className={styles.link} href="/registration">
            Sign up
          </Link>
        </div>
        <button className={styles.btn} type="submit">
          Login
        </button>
        <div className={styles.google}>
          or Login in with :
          <FaGoogle className={styles.go} onClick={() => signIn("google")} />
          <FaFacebookF
            className={styles.go}
            onClick={() => signIn("facebook ")}
          />
        </div>
      </form>
    </div>
  );
};

export default Login;
