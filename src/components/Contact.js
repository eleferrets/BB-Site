import React from "react";
import { profile } from "../data";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [botField, setBotField] = React.useState("");
  const [status, setStatus] = React.useState({ kind: "", text: "" });

  function handleSubmit(e) {
    e.preventDefault();
    setStatus({ kind: "", text: "Sending…" });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        "bot-field": botField,
        name,
        email,
        message,
      }),
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        setName("");
        setEmail("");
        setMessage("");
        setStatus({ kind: "ok", text: "Message sent!" });
      })
      .catch(() =>
        setStatus({
          kind: "err",
          text: `Something went wrong. You can email me at ${profile.email} instead.`,
        })
      );
  }

  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div>
          <h2>Contact Me</h2>
          <p>
            If you want to ask me any questions about me or any of my projects,
            then you are welcome to fill out this form! You can also email me at{" "}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>!
          </p>
          <div className="links">
            <a href={profile.github}>GitHub</a>
            <a href={profile.resume}>Resume</a>
          </div>
        </div>

        <form
          name="contact"
          method="POST"
          data-netlify="true"
          netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hp">
            <label htmlFor="bot-field">
              Don't fill this out:{" "}
              <input
                id="bot-field"
                name="bot-field"
                tabIndex={-1}
                autoComplete="off"
                value={botField}
                onChange={(e) => setBotField(e.target.value)}
              />
            </label>
          </p>
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              autoComplete="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="message">
            Message
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
          <button type="submit" className="btn primary">
            Submit
          </button>
          <div className={`status ${status.kind}`} role="status" aria-live="polite">
            {status.text}
          </div>
        </form>
      </div>
    </section>
  );
}
