import { useState } from "react";
import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import mynetwork from "../../assets/icons/mynetwork.ico";
import recycle from "../../assets/icons/recycle.ico";
import DesktopElement from "../desktop-element";
import styles from "./styles.module.css";
import Window from "../window";

function DesktopContainer() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <section className={styles.desktop_elements}>
      <DesktopElement
        onClick={handleOpen}
        icon={mydocuments}
        iconTitle={"My Documents"}>
        {open && <Window close={handleOpen}>my documents</Window>}
      </DesktopElement>
      <DesktopElement
        onClick={handleOpen}
        icon={mycomputer}
        iconTitle={"My Computer"}>
        {open && <Window close={handleOpen}>my computer</Window>}
      </DesktopElement>
      <DesktopElement
        onClick={handleOpen}
        icon={mynetwork}
        iconTitle={"My Network"}>
        {open && <Window close={handleOpen}>my network</Window>}
      </DesktopElement>
      <DesktopElement
        onClick={handleOpen}
        icon={recycle}
        iconTitle={"Recycle Bin"}>
        {open && <Window close={handleOpen}>recycle bin</Window>}
      </DesktopElement>
    </section>
  );
}

export default DesktopContainer;
