import React, { useState } from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";

function Window({ children, setWindow }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <button onClick={handleClick}>{setWindow}</button>

      {open && (
        <div className={styles.container}>
          <Draggable
            bounds={{ left: -30, top: -100, right: 1000, bottom: 60 }}
            handle=".handle">
            <div className={styles.window}>
              <div id={styles.top_border} className="handle">
                <button onClick={handleClick}>X</button>
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
