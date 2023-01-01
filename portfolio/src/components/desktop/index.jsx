import React from "react";
import bliss from "../../assets/bliss.jpg";
import styles from "./styles.module.css";
import Window from "../window";

function Desktop() {
  return (
    <div className={styles.desktop}>
      <Window />
      <img className={styles.background} src={bliss} alt="background" />
    </div>
  );
}

export default Desktop;
