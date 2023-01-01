import React from "react";
import styles from "./styles.module.css";

function DesktopElement({ icon, iconTitle }) {
  return (
    <div className={styles.desktop_element}>
      <img src={icon} alt="icon" />
      <p>{iconTitle}</p>
    </div>
  );
}

export default DesktopElement;
