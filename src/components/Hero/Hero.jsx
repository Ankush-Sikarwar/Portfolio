import React, { useState } from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils/utils";

export const Hero = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => setModalOpen(!modalOpen);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ankush</h1>
        <p className={styles.description}>
          I'm a full-stack developer with experience using React and NodeJS. Reach out if you'd like to learn more!
        </p>
        <button onClick={toggleModal} className={styles.contactBtn}>
          Contact Me
        </button>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />

      {modalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2>Contact Me</h2>
            <p>Email: <a href="mailto:Ankushsikarwar221@gmail.com">Ankushsikarwar221@gmail.com</a></p>
            <p>LinkedIn: <a href="https://www.linkedin.com/in/ankush-sikarwar-6b11a8222/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
            </p>
            <p>
            GitHub: <a href="https://github.com/Ankush-Sikarwar" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
            </p>
            <button onClick={toggleModal} className={styles.closeBtn}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};
