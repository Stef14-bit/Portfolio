import styles from "./styles.module.css";

import React from "react";

function MinWindow({ iconTitle, close }) {
  return (
    <div className={styles.min_window}>
      <p>{iconTitle}</p>
      <button onClick={close}>Show</button>
    </div>
  );
}

export default MinWindow;
