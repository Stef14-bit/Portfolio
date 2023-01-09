import styles from "./styles.module.css";
import turnoff from "../../assets/icons/turnoff.ico";
import logoff from "../../assets/icons/logoff.ico";
import { useState } from "react";
import ShutDown from "../shutDown-error";

function StartMenu({ userImg, userName, children, closeStart }) {
  const [shutDown, setShutDown] = useState(false);
  function handleShutDown() {
    setShutDown(!shutDown);
  }

  return (
    <div className={styles.overlay} onClick={closeStart}>
      <div className={styles.start_menu} onClick={(e) => e.stopPropagation()}>
        <div className={styles.top_items}>
          <img src={userImg} alt="user img" />
          <h2>{userName}</h2>
        </div>
        <section className={styles.content}>{children}</section>
        <div className={styles.bottom_items}>
          <button>
            <img src={logoff} alt="log off" className={styles.log_button} />
          </button>
          <p>Log Off</p>
          <button onClick={handleShutDown}>
            <img src={turnoff} alt="turn off" className={styles.log_button} />
          </button>
          <p>Turn off computer</p>
          {shutDown && <ShutDown close={handleShutDown} />}
        </div>
      </div>
    </div>
  );
}

export default StartMenu;
