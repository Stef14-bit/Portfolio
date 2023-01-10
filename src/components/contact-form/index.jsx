import React, { useState, useRef } from "react";
import styles from "./styles.module.css";
import msnLogo from "../../assets/icons/msnLogo.png";
import msnIcon from "../../assets/icons/msnIcon.jpg";
import emailjs from "@emailjs/browser";

function Contact({ icon, iconTitle }) {
  const form = useRef();
  const [formStatus, setFormStatus] = useState("Send");
  const [openForm, setOpenForm] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    setFormStatus("Submitting...");
    setName("");
    setEmail("");
    setMessage("");

    emailjs
      .sendForm(
        "service_pdcfm1q",
        "template_s3oddtb",
        form.current,
        "oima6GjDFnvBEc6bQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") setFormStatus("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
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
          <form ref={form} className={styles.form_body} onSubmit={onSubmit}>
            <label className={styles.form_label} htmlFor="name">
              Name
            </label>
            <input
              className={styles.form_input}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />

            <label className={styles.form_label} htmlFor="email">
              E-mail address:
            </label>
            <input
              className={styles.form_input}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label className={styles.form_label} htmlFor="message">
              Message
            </label>
            <textarea
              className={styles.form_message}
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              required
            />
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
