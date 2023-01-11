import React from "react";
import styles from "./styles.module.css";

function Skills({ icon, title }) {
  return (
    <div className={styles.skill}>
      <img src={icon} alt={title} />
      <p id={styles.text}>{title}</p>
    </div>
  );
}

export default Skills;
