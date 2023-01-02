import React from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";

function Window({ children, close }) {
  return (
    <div className={styles.container}>
      <Draggable bounds="parent" handle=".handle">
        <div className={styles.window}>
          <div id={styles.top_border} className="handle">
            <button onClick={close}>X</button>
          </div>
          {children}
        </div>
      </Draggable>
    </div>
  );
}
export default Window;
