"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import ScrollIndicator from "@/components/scroll-indicator";
import NavigationDots from "@/components/dottedScrollBar";

export default function Hero() {
  const [clickedScroll, setClickedScroll] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const fullHeight = document.documentElement.scrollHeight;
      const viewportHeight = window.innerHeight;
      const halfway = Math.min(
        (fullHeight - viewportHeight) / 2,
        viewportHeight * 0.3
      );

      if (scrollTop > halfway && !clickedScroll && !fadingOut) {
        setFadingOut(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [clickedScroll, fadingOut]);
  useEffect(() => {
    if (fadingOut) {
      const timeout = setTimeout(() => setClickedScroll(true), 500); // match animation duration
      return () => clearTimeout(timeout);
    }
  }, [fadingOut]);
  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = "/documents/resume.pdf";
      link.download = "Minhaj_Ap_resume.pdf";
      link.click();
      toast.success("Successfully downloaded");
    } catch (err) {
      toast.error("Failed to download resume");
      console.error(err);
    }
  };
  return (
    <div
      className="min-h-screen bg-gray-50/40 dark:bg-gray-900/70 transition-colors duration-300 relative"
      id="hero"
    >
      <Head>
        <title>Minhaj AP | MERN Stack Developer</title>
        <meta
          name="description"
          content="Building scalable backends with a knack for problem-solving."
        />
      </Head>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center h-[calc(100vh-120px)] px-6 text-center relative"
      >
        <h1 className="text-4xl sm:text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-2">
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
        <div className="flex flex-wrap gap-3 sm:gap-4  justify-center">
          {/* Primary Button - Hire Me */}
          <motion.a
            whileHover={{
              scale: 1.03,
              boxShadow: "0 4px 12px rgba(13, 148, 136, 0.3)",
            }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-center whitespace-nowrap"
          >
            Hire Me
          </motion.a>

          {/* Secondary Button - Get Resume */}
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleDownload}
            className="px-6 py-3 bg-white dark:bg-gray-800 border-2 border-teal-500/60 dark:border-teal-400/60 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium"
          >
            Get Resume
          </motion.a>
        </div>
      </motion.section>
      {!clickedScroll && (
        <div
          onClick={() => setFadingOut(true)}
          style={{
            display: "flex",
            justifyContent: "center",
            opacity: fadingOut ? 0 : 1,
            transition: "opacity 0.5s ease",
            pointerEvents: fadingOut ? "none" : "auto",
          }}
        >
          <ScrollIndicator />
        </div>
      )}
      <NavigationDots />
    </div>
  );
}
