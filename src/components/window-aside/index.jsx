import React from "react";
import styles from "./styles.module.css";

function WindowAside({ location }) {
  return (
    <div className={styles.container}>
      <div className={styles.box1}>
        <h2>System tasks</h2>
        <hr />
        <p id={styles.text}>View system information</p>
        <p id={styles.text}>Add or remove programs</p>
        <p id={styles.text}>Change a setting</p>
      </div>
      <div className={styles.box2}>
        <h2>Other Places</h2>
        <hr />
        <p id={styles.text}>My Network Places</p>
        <p id={styles.text}>My Documents</p>
        <p id={styles.text}>Shared Documents</p>
        <p id={styles.text}>Control Panel </p>
      </div>
      <div className={styles.box3}>
        <h2>Details</h2>
        <hr />
        <h3>{location}</h3>
        <p id={styles.text}>System Folder</p>
      </div>
    </div>
  );
}

export default WindowAside;
