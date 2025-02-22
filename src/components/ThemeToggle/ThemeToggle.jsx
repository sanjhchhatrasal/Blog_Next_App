"use client";

import React, { useContext } from "react";
import styles from "./ThemeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/Context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? {background: "white" }
          : { right: 1, background: "#0f172a" }
      }
    >
      <Image src="/moon.png" width={14} height={14} alt="moon" />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: "1px", background: "#0f172a" }
            : { right: "1px", background: "white" }
        }
      ></div>
      <Image src="/sun.png" width={14} height={14} alt="sun" />
    </div>
  );
};

export default ThemeToggle;
