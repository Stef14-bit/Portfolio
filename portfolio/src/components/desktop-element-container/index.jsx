import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import mynetwork from "../../assets/icons/mynetwork.ico";
import recycle from "../../assets/icons/recycle.ico";
import DesktopElement from "../desktop-element";
import styles from "./styles.module.css";

function DesktopContainer() {
  return (
    <section className={styles.desktop_elements}>
      <DesktopElement icon={mydocuments} iconTitle={"My Documents"} />
      <DesktopElement icon={mycomputer} iconTitle={"My Computer"} />
      <DesktopElement icon={mynetwork} iconTitle={"My Network"} />
      <DesktopElement icon={recycle} iconTitle={"Recycle Bin"} />
    </section>
  );
}

export default DesktopContainer;
