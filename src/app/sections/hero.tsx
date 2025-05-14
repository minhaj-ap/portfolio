"use client";
import { useEffect, useRef } from "react";
// import { useTheme } from "next-themes";
import { useTheme } from "@/context/theme-context";
import Head from "next/head";
import { motion } from "framer-motion";

// Grid Background
const GridBackground = () => (
  <div className="fixed inset-0 opacity-10 dark:opacity-15">
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

    const particles = Array.from({ length: 45 }).map((_, i) => {
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

  return <div ref={particlesRef} className="fixed inset-0" />;
};

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <Head>
        <title>Minhaj AP | MERN Stack Developer</title>
        <meta
          name="description"
          content="Building scalable backends with a knack for problem-solving."
        />
      </Head>

      {/* Background Elements */}
      <GridBackground />
      <Particles />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center h-[calc(100vh-80px)] px-6 text-center relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
          Hi, I&apos;m{" "}
          <span className="text-teal-500 dark:text-teal-400">Minhaj AP</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          A{" "}
          <span className="font-semibold text-teal-500 dark:text-teal-400">
            MERN Stack Developer
          </span>{" "}
          focused on backend logic.
        </p>
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="#"
          className="px-6 py-3 bg-teal-500 font-medium text-white rounded-lg shadow-lg hover:bg-teal-600 transition-colors relative z-10"
        >
          Explore My Works
        </motion.a>
      </motion.section>
    </div>
  );
}
