import React from "react";
import styles from "./styles.module.css";

function DesktopElement({ icon, iconTitle, children, onClick }) {
  return (
    <button className={styles.desktop_element} onClick={onClick}>
      <img src={icon} alt="icon" />
      <p>{iconTitle}</p>
      {children}
    </button>
  );
}

export default DesktopElement;
