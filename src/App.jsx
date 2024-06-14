import React from "react";
import Hero from "./Hero";
import Skill from "./Skill";
import Project from "./Project";
import Contact from "./Contact";
import Footer from "./Footer";
import Nav from "./Nav";
import About from "./About";
import Header from "./Header";

export default function App() {
  return (
    <>
      <Nav />
      <Header />
      <Hero />
      <Skill />
      <Project />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
