"use client";
import { useTheme } from "@/context/theme-context";
import React, { useEffect, useRef } from "react";

const GridBackground = () => (
  <div
    className="fixed inset-0 opacity-10 dark:opacity-15"
    style={{ zIndex: "-1" }}
  >
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  </div>
);

// Enhanced Floating Particles
const Particles = () => {
  const particlesRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (!particlesRef.current) return;

    const colors =
      theme === "dark"
        ? ["#4FD1C5", "#38B2AC", "#81E6D9"] // Brighter teals for dark mode
        : ["#0EA5E9", "#3B82F6", "#6366F1"]; // Vibrant blues for light mode
    const noOfParticles = window.innerWidth <= 780 ? 25 : 45;
    const particles = Array.from({ length: noOfParticles }).map((_, i) => {
      const particle = document.createElement("div");
      particle.className = "absolute rounded-full pointer-events-none";
      particle.style.width = `${Math.random() * 10 + 4}px`; // Larger particles (4-14px)
      particle.style.height = particle.style.width;
      particle.style.background = colors[i % colors.length];
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = "0.8"; // Higher opacity
      particlesRef.current?.appendChild(particle);

      // More dramatic animation
      const duration = Math.random() * 25 + 1500;
      const keyframes = [
        { transform: "translate(0, 0)" },
        {
          transform: `translate(${Math.random() * 200 - 100}px, ${
            Math.random() * 200 - 100
          }px)`,
        },
      ];
      particle.animate(keyframes, {
        duration,
        iterations: Infinity,
        direction: "alternate",
        easing: "ease-in-out",
      });

      return particle;
    });

    return () => particles.forEach((p) => p.remove());
  }, [theme]);

  return (
    <div
      ref={particlesRef}
      className="fixed inset-0"
      style={{ zIndex: "-1" }}
    />
  );
};
export default function Background() {
  return (
    <React.Fragment>
      <GridBackground />
      <Particles />
    </React.Fragment>
  );
}
