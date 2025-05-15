"use client";
import React from "react";
import Hero from "./sections/hero";
import SkillsSection from "./sections/skills";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <SkillsSection />
    </React.Fragment>
  );
}
