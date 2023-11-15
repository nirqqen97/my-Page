import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dimitry</h1>
        <p className={styles.description}>
          {" "}
          I'm a Frontend developer with 2 years of experience using React and
          Node.js. Reach out if you'd like to learn more{" "}
        </p>
        <a href="mailto:ivanov1dmytro@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <div className={styles.circle}>
        <img
          src={getImageUrl("hero/me.png")}
          alt="Hero Image of me"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.topBlur}></div>{" "}
      <div className={styles.bottomBlur}></div>
    </section>
  );
};
