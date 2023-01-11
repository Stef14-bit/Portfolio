import React from "react";
import styles from "./styles.module.css";
import winlogo from "../../assets/icons/winlogo.png";
import { useState } from "react";
import StartMenu from "../start-menu";
import DateTime from "../date-time";
import astronaut from "../../assets/icons/astronaut.bmp";
import WindowMobile from "../window-mobile";
import Iframe from "react-iframe";
import mycomputer from "../../assets/icons/mycomputer.ico";
import folder from "../../assets/icons/folder.ico";
import msn from "../../assets/icons/msn.ico";
import linkedin from "../../assets/icons/linkedin.png";
import github from "../../assets/icons/github.png";
import resume from "../../assets/resume.pdf";
import internetex from "../../assets/icons/internetex.ico";
import email from "../../assets/icons/email.ico";
import morestart from "../../assets/icons/morestart.ico";
import DesktopLink from "../desktop-external-link";
import Contact from "../contact-form";

function Start() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.start}>
      <button className={styles.start_btn} onClick={handleOpen}>
        <img src={winlogo} alt="windowMobiles logo" />
        start
      </button>
      {open && (
        <StartMenu
          closeStart={handleOpen}
          userImg={astronaut}
          userName={"Stefan"}>
          <div className={styles.start_items}>
            <WindowMobile icon={internetex} iconTitle={"Internet"}>
              <Iframe
                src="https://www.youtube.com/embed?v=66tfvFeALBQ"
                frameborder="0"
                width="100%"
                height="100%"></Iframe>
            </WindowMobile>

            <WindowMobile icon={email} iconTitle={"Email"}>
              <h1>Email here</h1>
            </WindowMobile>
            <hr className={styles.divider} />
            <WindowMobile icon={mycomputer} iconTitle={"My Computer"}>
              <h1>MY computer</h1>
            </WindowMobile>
            <WindowMobile icon={folder} iconTitle={"My Resume"}>
              <Iframe src={resume} width="100%" height="100%" />
            </WindowMobile>

            <DesktopLink
              href={"https://github.com/Stef14-bit"}
              icon={github}
              iconTitle={"GitHub"}
            />
            <Contact icon={msn} iconTitle={"Contact Me"} />

            <hr className={styles.divider} />
            <br />
            <h4>
              More Programs <img src={morestart} alt="more programs" />
            </h4>
            <hr className={styles.divider} />

            <DesktopLink
              href={"https://www.linkedin.com/in/stefan-ivanus-941455250/"}
              icon={linkedin}
              iconTitle={"LinkedIn"}
            />
            <hr className={styles.divider} />

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
            <WindowMobile icon={folder} iconTitle={"3 Team Project"}>
              <h2>Coming soon ... </h2>
            </WindowMobile>
            <hr className={styles.divider} />
          </div>
        </StartMenu>
      )}
      <div className={styles.mid_section}></div>
      <div className={styles.date_time}>{<DateTime />}</div>
    </div>
  );
}

export default Start;
