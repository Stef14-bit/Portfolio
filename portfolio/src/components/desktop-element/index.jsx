import React, { useState } from "react";
import styles from "./styles.module.css";
import Window from "../window";

function DesktopElement({ icon, iconTitle, children }) {
  const [window, setWindow] = useState(false);

  return (
    <div className={styles.desktop_element} onClick={() => setWindow(!window)}>
      <img src={icon} alt="icon" />
      <p>{iconTitle}</p>
      {window && <Window onClick={() => setWindow(false)}>{children}</Window>}
    </div>
  );
}

export default DesktopElement;
