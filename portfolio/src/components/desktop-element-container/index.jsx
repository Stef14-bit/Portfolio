import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import msn from "../../assets/icons/msn.ico";
import recycle from "../../assets/icons/recycle.ico";
import resume from "../../assets/resume.pdf";
import folder from "../../assets/icons/folder.ico";
import github from "../../assets/icons/github.png";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import Window from "../window";

// need desktop elements container to fix a problem with
// react-draggable package where if you drag the window out of
// view it will extend the page right and down

function DesktopContainer() {
  return (
    <section className={styles.desktop_elements}>
      <Window icon={mydocuments} iconTitle={"My Documents"}>
        <h1>MY documents</h1>
      </Window>

      <Window icon={mycomputer} iconTitle={"My Computer"}>
        <h1>MY computer</h1>
      </Window>
      <Window icon={recycle} iconTitle={"Recycle Bin"}>
        <h1>MY recycle bin</h1>
      </Window>
      <Window icon={folder} iconTitle={"My Resume"}>
        <Iframe src={resume} width="100%" height="100%" />
      </Window>
      <Window icon={msn} iconTitle={"MSN"}>
        <h1>insert contact form here!!</h1>
      </Window>
      <Window icon={github} iconTitle={"GitHub"}>
        <Iframe
          src={"https://github.com/Stef14-bit"}
          width="100%"
          height="100%"
        />
      </Window>
    </section>
  );
}

export default DesktopContainer;
