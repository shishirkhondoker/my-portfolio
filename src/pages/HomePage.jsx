import React from "react";
import myPic from "../assets/myPic.png";
import HeroSection from "../components/HeroSection";
import About from "./About";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <About />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default HomePage;
