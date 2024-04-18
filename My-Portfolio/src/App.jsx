import React from "react";
import styles from "./App.module.css";
import { Navbar } from "./components/navbar/Navbar";
import { About } from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
import { Skill } from "./components/Skills/Skill";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
