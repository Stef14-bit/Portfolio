import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import mynetwork from "../../assets/icons/mynetwork.ico";
import recycle from "../../assets/icons/recycle.ico";
import DesktopElement from "../desktop-element";
import styles from "./styles.module.css";
import Window from "../window";

function DesktopContainer() {
  return (
    <section className={styles.desktop_elements}>
      <DesktopElement icon={mydocuments} iconTitle={"My Documents"}>
        {<Window>WINDOW 1</Window>}
      </DesktopElement>
      <DesktopElement icon={mycomputer} iconTitle={"My Computer"}>
        {<Window>WINDOW 2</Window>}
      </DesktopElement>
      <DesktopElement icon={mycomputer} iconTitle={""} />
      <DesktopElement icon={mynetwork} iconTitle={"My Network"} />
      <DesktopElement icon={recycle} iconTitle={"Recycle Bin"} />
    </section>
  );
}

export default DesktopContainer;
