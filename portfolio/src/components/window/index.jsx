import React, { useState } from "react";
import styles from "./styles.module.css";
import Draggable from "react-draggable";

function Window({ children, close }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <button onClick={handleClick}>open</button>

      {open && (
        <div className={styles.container}>
          <Draggable bounds="parent" handle=".handle">
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
