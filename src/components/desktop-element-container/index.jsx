import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import msn from "../../assets/icons/msn.ico";
import recycle from "../../assets/icons/recycle.ico";
import resume from "../../assets/resume.pdf";
import aboutPdf from "../../assets/aboutPdf.pdf";
import folder from "../../assets/icons/folder.ico";
import about from "../../assets/icons/about.ico";
import github from "../../assets/icons/github.png";
import linkedin from "../../assets/icons/linkedin.png";
import styles from "./styles.module.css";
import Iframe from "react-iframe";
import Window from "../window";
import Contact from "../contact-form";
import WindowMobile from "../window-mobile";
import DesktopLink from "../desktop-external-link";
import WindowAside from "../window-aside";
import Skills from "../skills";
import skills from "../../data/skills";
import schoolMaterial from "../../data/recycleBin";
import projects from "../../data/projects";

// need desktop elements container to fix a problem with
// react-draggable package where if you drag the window out of
// view it will extend the page right and down

function DesktopContainer() {
  return (
    <>
      <section className={styles.desktop_elements}>
        <Window
          icon={mydocuments}
          iconTitle={"My Documents"}
          pageDescription={"No content yet..."}>
          <WindowAside location={"My Documents"} />
        </Window>

        <Window icon={mycomputer} iconTitle={"My Computer"}>
          <div className={styles.window_content}>
            <WindowAside location={"My Computer"} />
            <div className={styles.skill_area}>
              <h2> My skills :</h2>

              {skills.map((e) => (
                <Skills icon={e.icon} title={e.title} />
              ))}
            </div>{" "}
          </div>{" "}
        </Window>
        <Window
          icon={recycle}
          iconTitle={"Recycle Bin"}
          pageDescription={
            'The "trash" section is some notable things i did during my learning.So basically small projects exercises and some teaching materials'
          }>
          <div className={styles.window_content}>
            <WindowAside location={"Recycle Bin"} />
            <div className={styles.skill_area}>
              {schoolMaterial.map((e) => (
                <DesktopLink href={e.url} icon={folder} iconTitle={e.title} />
              ))}
            </div>
          </div>
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
        {projects.map((e) => (
          <Window
            icon={folder}
            iconTitle={e.iconTitle}
            pageDescription={e.description}
            externalLink={e.externalLink}
            linkName={null || e.linkName}>
            <Iframe src={e.externalLink} width="100%" height="100%" />
          </Window>
        ))}
        <Contact icon={msn} iconTitle={"Contact Me"} />
        <Window icon={about} iconTitle={"About"}>
          <iframe src={aboutPdf} width="100%" height="100%" title="about" />
        </Window>
      </section>

      {/* need a second section for mobile as the draggable will not function as intended
          on mobile making it impossible to close a window after it's been open 
          the section below does not use Draggable
          ---the section below will toggle on as the one above will toggle off when screen < 400px*/}

      <section className={styles.desktop_elements_mobile} Mobile>
        <WindowMobile
          icon={mydocuments}
          iconTitle={"My Documents"}
          pageDescription={"No content yet..."}></WindowMobile>

        <WindowMobile icon={mycomputer} iconTitle={"My Computer"}>
          <div className={styles.skills_mobile}>
            <h2> My skills :</h2>

            {skills.map((e) => (
              <Skills icon={e.icon} title={e.title} />
            ))}
          </div>{" "}
        </WindowMobile>
        <WindowMobile
          icon={recycle}
          iconTitle={"Recycle Bin"}
          pageDescription={
            'The "trash" section is most of the things i did during my learning.So basically small projects exercises and some teaching materials'
          }>
          <div className={styles.mobile_recycle}>
            {" "}
            {schoolMaterial.map((e) => (
              <DesktopLink href={e.url} icon={folder} iconTitle={e.title} />
            ))}
          </div>
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

        {projects.map((e) => (
          <WindowMobile
            icon={folder}
            iconTitle={e.iconTitle}
            pageDescription={e.description}
            externalLink={e.externalLink}>
            <Iframe src={e.externalLink} width="100%" height="100%" />
          </WindowMobile>
        ))}
        <Contact icon={msn} iconTitle={"Contact Me"} />
        <WindowMobile icon={about} iconTitle={"About"}>
          <iframe src={aboutPdf} width="100%" height="100%" title="about" />
        </WindowMobile>
      </section>
    </>
  );
}

export default DesktopContainer;
