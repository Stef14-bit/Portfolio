import React from "react";
import closeerror from "../../assets/closeerror.png";
import styles from "./styles.module.css";
function ShutDown({ close }) {
  return (
    <div className={styles.shut_down} onClick={close}>
      <img src={closeerror} alt="blue screen error" />
    </div>
  );
}

export default ShutDown;
