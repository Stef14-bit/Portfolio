import React from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";
import { useState } from "react";

function Window({
  children,
  icon,
  iconTitle,
  pageDescription,
  linkName,
  externalLink,
}) {
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
          <Draggable handle=".handle" bounds="parent">
            <div className={styles.window}>
              <div id={styles.top_border} className="handle">
                <div className={styles.window_title}>
                  <img src={icon} alt={iconTitle} />
                  <p> {iconTitle}</p>
                </div>
                <div>
                  <button disabled className={styles.maximize}>
                    _
                  </button>
                  <button disabled className={styles.minimize}>
                    <div className={styles.max_icon}></div>
                  </button>
                  <button
                    onClick={() => setWindow(!window)}
                    className={styles.close_btn}>
                    X
                  </button>
                </div>
              </div>
              <div className={styles.top_section}>
                <span> File Edit View Favorites Tools Help</span>
                <hr /> <p>{pageDescription}</p>
                _Adress
                <input type="text" value={`Desktop / ${iconTitle}`} />
                <a href={externalLink} target="_blank" rel="noreferrer">
                  {linkName && <button>{linkName}</button>}
                </a>
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
