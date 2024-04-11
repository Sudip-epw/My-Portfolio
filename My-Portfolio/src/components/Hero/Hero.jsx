import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sudip</h1>
        <p className={styles.description}>
          I am a full-stack developer with a commitment to excellence, seeking a
          position to utilise my skills and abilities towards your company.
          Please reach out if you'd like to know more!!
        </p>
        <div className={styles.buttons}>
          {/* resumeBtn == contactBtn in the video  */}
          <a
            className={styles.resumeBtn}
            href="/assets/Sudip_Halder_resume.pdf"
          >
            View Resume
          </a>
          <a
            className={styles.resumeBtn}
            href="mailto:sudip.halder2203@gmail.com"
          >
            Contact me
          </a>
        </div>
      </div>

      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
