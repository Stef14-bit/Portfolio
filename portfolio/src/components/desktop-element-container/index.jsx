import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import mynetwork from "../../assets/icons/mynetwork.ico";
import recycle from "../../assets/icons/recycle.ico";
import github from "../../assets/icons/github.png";
import DesktopElement from "../desktop-element";
import styles from "./styles.module.css";
import Iframe from "react-iframe";

// need desktop elements container to fix a problem with
// react-draggable package where if you drag the window out of
// view it will extend the page right and down

function DesktopContainer() {
  return (
    <section className={styles.desktop_elements}>
      <DesktopElement icon={mycomputer} iconTitle={"My Computer"}>
        <Iframe
          src="https://www.linkedin.com/in/stefan-ivanus-941455250/"
          width="100%"
          height="100%"
          title="github"
        />
      </DesktopElement>
      <DesktopElement icon={mydocuments} iconTitle={"My Documents"}>
        <Iframe
          src="file:///C:/Users/stefa/OneDrive/Desktop/Stefan_Ivanus_Resume.pdf"
          width="100%"
          height="100%"
        />
      </DesktopElement>
      <DesktopElement icon={mynetwork} iconTitle={"Network"}>
        network 1{" "}
      </DesktopElement>
      <DesktopElement icon={recycle} iconTitle={"Recycle Bin"}>
        recycle 1{" "}
      </DesktopElement>
      <DesktopElement icon={github} iconTitle={"GitHub"}>
        recycle 1{" "}
      </DesktopElement>
    </section>
  );
}

export default DesktopContainer;
