"use client";

import React, { useState } from "react";
import styles from "./AuthLinks.module.css";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const {  status } = useSession();
  // const status = "notauthenticated";

  return (
    <div className={styles.container}>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.login}>Login</Link>
      ) : (
        <div className={styles.links}>
          <Link className={styles.login}  href="/write">Write</Link>
          {/* <Link className={styles.login} href="/logout" onClick={signOut}>Logout</Link> */}
              <button className={styles.login} onClick={() => signOut()}>Logout</button>
        </div>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsive}>
          <Link href="/" className={styles.link}>
            Home
          </Link>
          <Link href="/" className={styles.link}>
            Contact
          </Link>
          <Link href="/" className={styles.link}>
            About
          </Link>
          {status === "unauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <div className={styles.links}>
              <Link href="/write">Write</Link>
              <button onClick={() => signOut()}>Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AuthLinks;
