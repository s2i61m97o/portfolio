"use client";

import clsx from "clsx";
import styles from "./Contact.module.scss";
import {useForm} from "@formspree/react";
import {useState, useRef, useEffect} from "react";
import Button from "@/components/Button";

interface Data {
  name: string;
  email: string;
  message: string;
}

type DataKeys = keyof Data;

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [state, handleSubmit, reset] = useForm("xeegyonw");
  const [error, setError] = useState({
    name: false,
    email: false,
    message: false,
  });

  function validateAndSubmit(e: React.SubmitEvent) {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData) as unknown as Data;

    const newError = {
      name: formObject.name.trim() === "",
      message: formObject.message.trim() === "",
      email: !emailRegex.test(formObject.email),
    };

    setError(newError);

    if (!newError.name && !newError.message && !newError.email) {
      handleSubmit(formData);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      const timer = setTimeout(() => {
        reset();
        form.current?.reset();
      }, 4900);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded, reset]);

  function handleChange(field: DataKeys) {
    setError((prev) => ({...prev, [field]: false}));
  }

  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.contact__heading}>get in touch</h2>
      <p className={styles.contact__subheading}>
        to talk about projects, collaborations and opportunities
      </p>
      <form
        className={styles.contact__form}
        onSubmit={validateAndSubmit}
        ref={form}
      >
        <input
          className={clsx(styles.contact__input, error.name && styles.error)}
          name="name"
          placeholder={error.name ? "please enter your name" : "name"}
          type="text"
          disabled={state.submitting}
          onChange={() => handleChange("name")}
        />
        <input
          className={clsx(styles.contact__input, error.email && styles.error)}
          name="email"
          placeholder={error.email ? "please enter a valid email" : "email"}
          type="email"
          disabled={state.submitting}
          onChange={() => handleChange("email")}
        />

        <textarea
          className={clsx(
            styles.contact__input,
            styles.contact__inputMessage,
            error.message && styles.error,
          )}
          name="message"
          placeholder={error.message ? "please enter a message" : "message"}
          disabled={state.submitting}
          onChange={() => handleChange("message")}
        />

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
      <div className={styles.link__container}>
        <Button
          link="https://github.com/s2i61m97o/"
          variant="github"
          external
          aria-label="github profile"
          className={styles.link}
        >
          view github profile
        </Button>
        <Button
          link="https://www.frontendmentor.io/profile/s2i61m97o/"
          variant="secondary"
          external
          aria-label="frontend mentors profile"
          className={styles.link}
        >
          view frontend mentors profile
        </Button>
      </div>

      <span
        className={clsx(styles.toast, state.succeeded && styles.toast_Show)}
        role="status"
        aria-live="polite"
      >
        thanks for your message
        <br />I will get back to you soon
      </span>
    </section>
  );
}
