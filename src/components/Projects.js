import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="wrap">
        <div className="sec-head">
          <h2>My Projects</h2>
        </div>
        <div className="grid">
          {projects.map((project) => (
            <a className="card" href={project.link} key={project.title}>
              <div className="thumb">
                <img src={project.image} alt={project.alt} loading="lazy" />
              </div>
              <div className="meta">
                <h3>{project.title}</h3>
                <span className="arrow" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="stack">{project.stack}</div>
              <p>{project.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
