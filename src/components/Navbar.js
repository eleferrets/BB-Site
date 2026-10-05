import React from "react";
import { profile } from "../data";

export default function Navbar() {
  return (
    <header>
      <div className="wrap nav">
        <a href="#top" className="brand">
          {profile.name}
        </a>
        <ul>
          <li>
            <a href="#projects">My Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href={profile.resume}>My Resume</a>
          </li>
        </ul>
        <a href="#contact" className="cta">
          Contact Me
        </a>
      </div>
    </header>
  );
}
