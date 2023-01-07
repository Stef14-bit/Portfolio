import React from "react";
import styles from "./styles.module.css";
import { useState } from "react";

function WindowMobile({ children, icon, iconTitle }) {
  const [WindowMobile, setWindowMobile] = useState(false);
  return (
    <>
      <button
        className={styles.desktop_icon}
        onClick={() => setWindowMobile(!WindowMobile)}>
        <img src={icon} alt={icon}></img>
        <p>{iconTitle}</p>
      </button>
      {WindowMobile && (
        <div className={styles.container}>
          <div className={styles.window_mobile}>
            <div className={styles.top_border}>
              <button disabled className={styles.maximize}>
                _
              </button>
              <button disabled className={styles.minimize}>
                O
              </button>
              <button
                onClick={() => setWindowMobile(!WindowMobile)}
                className={styles.close_btn}>
                X
              </button>
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default WindowMobile;
