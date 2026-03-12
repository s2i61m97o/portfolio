"use client";

import clsx from "clsx";
import styles from "./Contact.module.scss";
import {useForm} from "@formspree/react";
import {useState, useRef, useEffect} from "react";

export default function Contact() {
  const form = useRef(null);
  const [state, handleSubmit, reset] = useForm("xeegyonw");
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });

  function validateAndSubmit(e) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    const newError = {
      name: formObject.name.trim() === "",
      message: formObject.message.trim() === "",
      email: !emailRegex.test(formObject.email),
    };

    setError(newError);

    if (!newError.name && !newError.message && !newError.email) {
      handleSubmit(e);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  function handleChange(field) {
    setError((prev) => ({...prev, [field]: false}));
  }

  return (
    <section id="contact" className={styles.container}>
      <h3 className={styles.contact__heading}>Contact</h3>
      <p className={styles.contact__subtext}>Get in touch</p>
      <form
        className={styles.contact__form}
        onSubmit={validateAndSubmit}
        ref={form}
      >
        <label className={clsx(styles.contact__label, styles.form__name)}>
          <p>
            Name:{" "}
            <span
              className={clsx(
                styles.contact__error,
                error.name && styles.contact__errorShow,
              )}
            >
              Please enter your name
            </span>
          </p>
          <input
            className={styles.contact__input}
            name="name"
            placeholder="Name"
            type="text"
            disabled={state.submitting}
            onChange={() => handleChange("name")}
          />
        </label>

        <label className={clsx(styles.contact__label, styles.form__email)}>
          <p>
            Email:{" "}
            <span
              className={clsx(
                styles.contact__error,
                error.email && styles.contact__errorShow,
              )}
            >
              Please enter a valid contact email
            </span>
          </p>
          <input
            className={styles.contact__input}
            name="email"
            placeholder="Email"
            type="email"
            disabled={state.submitting}
            onChange={() => handleChange("email")}
          />
        </label>

        <label
          className={clsx(styles.contact__label, styles.form__message)}
          name="message"
        >
          <p>
            Message:{" "}
            <span
              className={clsx(
                styles.contact__error,
                error.message && styles.contact__errorShow,
              )}
            >
              Please enter a message
            </span>
          </p>
          <textarea
            className={styles.contact__input}
            name="message"
            placeholder="Message"
            disabled={state.submitting}
            onChange={() => handleChange("message")}
          />
        </label>
        <input
          type="text"
          name="_gotcha"
          className={styles.contact__honeypot}
        />
        <button
          type="submit"
          disabled={state.submitting}
          className={styles.contact__button}
        >
          send message
        </button>
      </form>
      <div
        className={clsx(
          styles.contact__popup,
          state.succeeded && styles.contact__popupShow,
        )}
      >
        <p style={{fontWeight: "bold"}}>Thanks for your message!</p>
        <p>I will get back to you shortly</p>
      </div>
    </section>
  );
}
