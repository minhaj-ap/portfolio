"use client";
import React from "react";
import Hero from "./sections/hero";
import SkillsSection from "./sections/skills";
import ProjectsSection from "./sections/projects";
import Background from "./background";
import AIProjectsSection from "./sections/AIProjectsSection";
import LeetCodeSection from "./sections/leetCodeSection";

export default function Home() {
  return (
    <React.Fragment>
      <Background />
      <Hero />
      <SkillsSection />
      <ProjectsSection />
      <AIProjectsSection />
      <LeetCodeSection />
    </React.Fragment>
  );
}
