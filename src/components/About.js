import React from "react";
import { profile } from "../data";

export default function About() {
  return (
    <div className="wrap hero">
      <div className="hero-grid">
        <div>
          <div className="eyebrow">{profile.role}</div>
          <h1>
            Hi! I'm <em>Brian!</em>
          </h1>
          <p>
            I am <strong>Brian Balthazar</strong> and I am a{" "}
            <strong>Full-stack Web Developer</strong>. I have done{" "}
            <strong>remote</strong> work for influential companies such as
            CodePath and iCIMS, and have collaborated with many amazing and
            talented people to create apps for consumers. I also make games on
            the side, and know a bit of Spanish and Haitian Creole.
          </p>
          <div className="btns">
            <a className="btn primary" href="#projects">
              My Projects
            </a>
            <a className="btn ghost" href={profile.resume}>
              My Resume
            </a>
          </div>
        </div>
        <div className="portrait">
          <img src={profile.photo} alt={profile.name} width="960" height="1200" />
        </div>
      </div>
    </div>
  );
}
