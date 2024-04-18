import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out.</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img
            className={styles.imageIcon}
            src={getImageUrl("contact/emailIcon.png")}
            alt="Email Icon"
          />
          <a href="mailto:sudip.halder2203@gmail.com">
            sudip.halder2203@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.imageIcon}
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/sudip-halder-969a70208/">
            linkedin.com/sudiphalder
          </a>
        </li>
        <li className={styles.link}>
          <img
            className={styles.imageIcon}
            src={getImageUrl("contact/githubIcon.png")}
            alt="Github Icon"
          />
          <a href="https://github.com/Sudip-epw">github.com/sudiphalder</a>
        </li>
      </ul>
    </footer>
  );
};
