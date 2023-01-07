import React from "react";
import styles from "./styles.module.css";
import winlogo from "../../assets/icons/winlogo.png";
import { useState } from "react";
import StartMenu from "../start-menu";
import DateTime from "../date-time";
import astronaut from "../../assets/icons/astronaut.bmp";
import Window from "../window";
import Iframe from "react-iframe";
import mycomputer from "../../assets/icons/mycomputer.ico";
import folder from "../../assets/icons/folder.ico";
import msn from "../../assets/icons/msn.ico";
import github from "../../assets/icons/github.png";
import resume from "../../assets/resume.pdf";
import internetex from "../../assets/icons/internetex.ico";
import email from "../../assets/icons/email.ico";
import morestart from "../../assets/icons/morestart.ico";

function Start() {
  const [open, setOpen] = useState(false);

  const handleOpen = (e) => {
    setOpen(!open);
    e.stopPropagation();
  };
  return (
    <div className={styles.start}>
      <button className={styles.start_btn} onClick={handleOpen}>
        <img src={winlogo} alt="windows logo" />
        start
      </button>
      {open && (
        <StartMenu
          closeStart={handleOpen}
          userImg={astronaut}
          userName={"Stefan"}>
          <div className={styles.start_items}>
            <Window icon={internetex} iconTitle={"Internet Explorer"}>
              <Iframe
                src="https://www.youtube.com/embed?v=66tfvFeALBQ"
                frameborder="0"
                width="100%"
                height="100%"></Iframe>
            </Window>
            <Window icon={email} iconTitle={"Email"}>
              <h1>Email here</h1>
            </Window>
            <hr className={styles.divider} />
            <Window icon={mycomputer} iconTitle={"My Computer"}>
              <h1>MY computer</h1>
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
            <hr className={styles.divider} />
            <br />
            <h4>
              More Programs <img src={morestart} alt="more programs" />
            </h4>
          </div>
        </StartMenu>
      )}
      <div className={styles.mid_section}>
        <p>SKILLS:</p>
        {window && <div className={styles.minimized_window}>window</div>}
      </div>
      <div className={styles.date_time}>{<DateTime />}</div>
    </div>
  );
}

export default Start;
