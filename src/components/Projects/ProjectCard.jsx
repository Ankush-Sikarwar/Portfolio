import React, { useState } from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils/utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const shortDescription =
    description.length > 100
      ? description.substring(0, 100) + "..."
      : description;

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>
        {showFullDescription ? description : shortDescription}
        {description.length > 100 && (
          <button onClick={toggleDescription} className={styles.readMore}>
            {showFullDescription ? "Read Less" : "Read More"}
          </button>
        )}
      </p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demo} className={styles.link}>
          Demo
        </a>
        <a href={source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
