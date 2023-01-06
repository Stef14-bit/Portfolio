import styles from "./styles.module.css";
import turnoff from "../../assets/icons/turnoff.ico";
import logoff from "../../assets/icons/logoff.ico";

function StartMenu({ userImg, userName, children }) {
  return (
    <div className={styles.start_menu}>
      <div className={styles.top_items}>
        <img src={userImg} alt="user img" />
        <h2>{userName}</h2>
      </div>
      <section className={styles.content}>{children}</section>
      <div className={styles.bottom_items}>
        <button>
          <img src={logoff} alt="log off" />
        </button>
        <p>Log Off</p>
        <button>
          <img src={turnoff} alt="turn off" />
        </button>
        <p>Turn off computer</p>
      </div>
    </div>
  );
}

export default StartMenu;
