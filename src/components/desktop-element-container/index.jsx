import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import msn from "../../assets/icons/msn.ico";
import recycle from "../../assets/icons/recycle.ico";
import resume from "../../assets/resume.pdf";
import folder from "../../assets/icons/folder.ico";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import Window from "../window";
import Contact from "../contact-form";
import WindowMobile from "../window-mobile";
import DesktopLink from "../desktop-external-link";

// need desktop elements container to fix a problem with
// react-draggable package where if you drag the window out of
// view it will extend the page right and down

function DesktopContainer() {
  return (
    <>
      <section className={styles.desktop_elements}>
        <Window icon={mydocuments} iconTitle={"My Documents"}>
          <h1>MY Projects</h1>
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
        <DesktopLink
          href={"https://github.com/Stef14-bit"}
          icon={github}
          iconTitle={"GitHub"}
        />
        <DesktopLink
          href={"https://www.linkedin.com/in/stefan-ivanus-941455250/"}
          icon={linkedin}
          iconTitle={"LinkedIn"}
        />
        <Window icon={folder} iconTitle={"1 Team Project"}>
          <h2>First team project using HTML CSS and Js</h2>

          <Iframe
            src={"https://matt0107.github.io/imaginaryCountry/"}
            width="100%"
            height="100%"
          />
        </Window>
        <Window icon={folder} iconTitle={"2 Team Project"}>
          <h2>
            Second team project using Js React and different node packages
          </h2>
          <Iframe
            src={"https://wild-space-explorer.netlify.app/"}
            width="100%"
            height="100%"
          />
        </Window>
        <Window icon={folder} iconTitle={"3 Team Project"}>
          <h2>Coming soon ... </h2>
        </Window>

        <Contact icon={msn} iconTitle={"Contact Me"} />
      </section>

      {/* need a second section for mobile as the draggable will not function as intended
          on mobile making it impossible to close a window after it's been open 
          the section below does not use Draggable
          ---the section below will toggle on as the one above will toggle off when screen < 400px*/}

      <section className={styles.desktop_elements_mobile} Mobile>
        <WindowMobile icon={mydocuments} iconTitle={"My projects"}>
          <h1>MY documents</h1>
        </WindowMobile>

        <WindowMobile icon={mycomputer} iconTitle={"My Computer"}>
          <h1>MY computer</h1>
        </WindowMobile>
        <WindowMobile icon={recycle} iconTitle={"Recycle Bin"}>
          <h1>MY recycle bin</h1>
        </WindowMobile>
        <WindowMobile icon={folder} iconTitle={"My Resume"}>
          <Iframe src={resume} width="100%" height="100%" />
        </WindowMobile>

        <DesktopLink
          href={"https://github.com/Stef14-bit"}
          icon={github}
          iconTitle={"GitHub"}
        />
        <DesktopLink
          href={"https://www.linkedin.com/in/stefan-ivanus-941455250/"}
          icon={linkedin}
          iconTitle={"LinkedIn"}
        />

        <WindowMobile icon={folder} iconTitle={"1 Team Project"}>
          <h2>First team project using HTML CSS and Js</h2>

          <Iframe
            src={"https://matt0107.github.io/imaginaryCountry/"}
            width="100%"
            height="100%"
          />
        </WindowMobile>
        <WindowMobile icon={folder} iconTitle={"2 Team Project"}>
          <h2>
            Second team project using Js React and different node packages
          </h2>
          <Iframe
            src={"https://wild-space-explorer.netlify.app/"}
            width="100%"
            height="100%"
          />
        </WindowMobile>
        <Contact icon={msn} iconTitle={"Contact Me"} />
      </section>
    </>
  );
}

export default DesktopContainer;
