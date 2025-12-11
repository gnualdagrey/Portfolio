import { jsxDEV } from "react/jsx-dev-runtime";
import React from "react";
import hero from "../../assets/hero/portfolio_transparent.png"
import styles from "../Hero/Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Geoffrey Grey</h1>
        <p className={styles.description}>
          I'm a fresh graduate with hands-on experience in React, HTML, CSS, and foundational database concepts. I'm eager to contribute to real-world projects and continue growing my skills. Feel free to reach out if you'd like to connect!
        </p>
        <a href="mailto:gnualdagrey@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={hero}
        alt="Hero image of me"
        className={styles.heroImg}
        width={200}

      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};