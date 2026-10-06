import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main id="top">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </React.Fragment>
  );
}
