import React from "react";
import styles from "./styles.module.css";
import winlogo from "../../assets/icons/winlogo.png";
import { useState } from "react";
import StartMenu from "../start-menu";
import DateTime from "../date-time";
import astronaut from "../../assets/icons/astronaut.bmp";
import DesktopElement from "../desktop-element";
import mycomputer from "../../assets/icons/mycomputer.ico";
import mydocuments from "../../assets/icons/mydocuments.ico";
import mynetwork from "../../assets/icons/mynetwork.ico";
import recycle from "../../assets/icons/recycle.ico";
import internetex from "../../assets/icons/internetex.ico";
import email from "../../assets/icons/email.ico";
import morestart from "../../assets/icons/morestart.ico";

function Start() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className={styles.start}>
      <button className={styles.start_btn} onClick={handleOpen}>
        <img src={winlogo} alt="windows logo" />
        start
      </button>
      {open && (
        <StartMenu userImg={astronaut} userName={"Stefan"}>
          <div className={styles.start_items}>
            <DesktopElement
              icon={internetex}
              iconTitle={"Internet"}
              iconSubtitle={"Go online"}
            />

            <DesktopElement icon={email} iconTitle={"E-mail"} />
            <hr className={styles.divider} />
            <DesktopElement icon={mydocuments} iconTitle={"My Documents"} />
            <DesktopElement icon={mycomputer} iconTitle={"My Computer"} />
            <DesktopElement icon={mynetwork} iconTitle={"My Network"} />
            <DesktopElement icon={recycle} iconTitle={"Recycle Bin"} />
            <hr className={styles.divider} />
            <br />
            <h4>
              More Programs <img src={morestart} alt="more programs" />
            </h4>
          </div>
        </StartMenu>
      )}
      <div className={styles.date_time}>{<DateTime />}</div>
    </div>
  );
}

export default Start;
