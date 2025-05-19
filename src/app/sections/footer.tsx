"use client";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="py-8 border-t border-gray-200 dark:border-gray-800 text-center bg-black"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/minhaj-ap"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/minhaj-ap-7662ab2b1/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:minhajap00@gmail.com"
            aria-label="Email"
            className="text-gray-500 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"
          >
            <FiMail className="w-5 h-5" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Minhaj AP. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}
