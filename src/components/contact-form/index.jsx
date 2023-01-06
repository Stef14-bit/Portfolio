import React, { useState } from "react";
import styles from "./styles.module.css";
import msnLogo from "../../assets/icons/msnLogo.png";
import msnIcon from "../../assets/icons/msnIcon.jpg";

function Contact({ icon, iconTitle }) {
  const [formStatus, setFormStatus] = useState("Send");
  const [openForm, setOpenForm] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setFormStatus("Submitting...");

    const { name, email, message } = e.target.elements;

    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  }
  return (
    <>
      <button
        className={styles.desktop_icon}
        onClick={() => setOpenForm(!openForm)}>
        <img src={icon} alt={icon}></img>
        <p>{iconTitle}</p>
      </button>

      {openForm && (
        <div className={styles.contact_container}>
          <div className={styles.top_section}>
            <img src={msnLogo} alt="msn logo" />
            <button
              className={styles.close_button}
              onClick={() => setOpenForm(false)}>
              X
            </button>
          </div>

          <img className={styles.msn_picture} src={msnIcon} alt="msn icon" />
          <form className={styles.form_body} onSubmit={onSubmit}>
            <label className={styles.form_label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.form_input}
              type="text"
              id="name"
              required
            />

            <label className={styles.form_label} htmlFor="email">
              E-mail address:
            </label>
            <input
              className={styles.form_input}
              type="email"
              id="email"
              required
            />
            <label className={styles.form_label} htmlFor="message">
              Message
            </label>
            <textarea className={styles.form_message} id="message" required />
            <button className={styles.submit_btn} type="submit">
              {formStatus}
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default Contact;
