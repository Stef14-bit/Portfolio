import React, { useState } from "react";
import styles from "./styles.module.css";
import Window from "../window";

function DesktopElement({ icon, iconTitle, iconSubtitle, children }) {
  const [window, setWindow] = useState(false);

  function handleWindow(e) {
    setWindow(!window);
    e.stopPropagation();
  }

  return (
    <div className={styles.desktop_element} onClick={handleWindow}>
      <img src={icon} alt="icon" />
      <p>{iconTitle}</p>
      <span>{iconSubtitle}</span>
      {window && <Window close={handleWindow}>{children}</Window>}
    </div>
  );
}

export default DesktopElement;
