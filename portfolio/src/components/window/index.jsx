import React from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";

function Window() {
  return (
    <div className={styles.container}>
      <Draggable bounds="parent" handle=".handle">
        <div className={styles.window}>
          <div id={styles.top_border} className="handle">
            Window
          </div>
        </div>
      </Draggable>
    </div>
  );
}
export default Window;
