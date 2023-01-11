import React from "react";
import styles from "./styles.module.css";

function DesktopLink({ href, icon, iconTitle }) {
  return (
    <div className={styles.desktop_link}>
      <a href={href} target="_blank" rel="noreferrer">
        <img src={icon} alt={iconTitle} />
        <p>{iconTitle}</p>
      </a>
    </div>
  );
}

export default DesktopLink;
