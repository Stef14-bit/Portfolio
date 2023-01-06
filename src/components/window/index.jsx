import React from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";
import { useState } from "react";

function Window({ children, icon, iconTitle }) {
  const [window, setWindow] = useState(false);
  return (
    <>
      <button
        className={styles.desktop_icon}
        onClick={() => setWindow(!window)}>
        <img src={icon} alt={icon}></img>
        <p>{iconTitle}</p>
      </button>
      {window && (
        <div className={styles.container}>
          <Draggable handle=".handle">
            <div className={styles.window}>
              <div id={styles.top_border} className="handle">
                <button disabled className={styles.maximize}>
                  _
                </button>
                <button disabled className={styles.minimize}>
                  O
                </button>
                <button
                  onClick={() => setWindow(false)}
                  className={styles.close_btn}>
                  x
                </button>
              </div>
              {children}
            </div>
          </Draggable>
        </div>
      )}
    </>
  );
}
export default Window;
