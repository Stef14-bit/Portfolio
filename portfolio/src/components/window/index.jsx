import React from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";

function Window({ children, onClick, bounds }) {
  return (
    <div className={styles.container}>
      <Draggable handle=".handle" bounds={bounds}>
        <div className={styles.window}>
          <div id={styles.top_border} className="handle">
            <button disabled className={styles.maximize}>
              _
            </button>
            <button disabled className={styles.minimize}>
              O
            </button>
            <button onClick={onClick} className={styles.close_btn}>
              x
            </button>
          </div>
          {children}
        </div>
      </Draggable>
    </div>
  );
}
export default Window;
