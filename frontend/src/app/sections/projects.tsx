"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FiGithub, FiExternalLink, FiLock, FiCode } from "react-icons/fi";
import { useData } from "@/context/data-context";

export default function ProjectsSection() {
  const { Projects, loading } = useData();
  const [tooltip, setTooltip] = useState({ show: false, project: "" });
  return (
    <section className="py-16 bg-gray-50/60 dark:bg-gray-900/50" id="projects">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        {loading && <p>Loading...</p>}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Project Highlights
        </motion.h2>
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Projects?.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800/70 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow flex flex-col"
            >
              <h3 className="font-bold text-lg mb-2 text-teal-600 dark:text-teal-400">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <ul className="space-y-1 mb-5">
                {project.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-teal-500 mr-2">•</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {metric}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                <a
                  href={project.links.live}
                  target="_blank"
                  className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Live Demo
                </a>

                <div className="relative">
                  {project.links.github ? (
                    <a
                      href={project.links.github}
                      target="_blank"
                      className="flex items-center text-sm text-gray-700 dark:text-gray-300 hover:text-teal-500 transition-colors"
                    >
                      <FiGithub className="mr-1" /> Code
                    </a>
                  ) : (
                    <button
                      onClick={() =>
                        setTooltip({ show: true, project: project.title })
                      }
                      onMouseLeave={() =>
                        setTooltip({ show: false, project: "" })
                      }
                      className="flex items-center text-sm text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    >
                      <FiLock className="mr-1" /> Code
                    </button>
                  )}

                  {tooltip.show && tooltip.project === project.title && (
                    <motion.div
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute left-0 bottom-full mb-2 px-3 py-2 bg-gray-800 text-white text-xs rounded whitespace-nowrap"
                    >
                      Private repository (college project)
                      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-b-0 border-t-4 border-gray-800 border-x-transparent" />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className={`bg-white dark:bg-gray-800/70 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow ${
              (Projects?.length ?? 0) % 3 === 0
                ? "md:col-span-3"
                : "md:col-span-2 lg:col-span-1"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full text-center">
              <FiCode className="w-10 h-10 text-teal-500 dark:text-teal-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">Explore More on GitHub</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Check out my other projects, experiments, and contributions
              </p>
              <a
                href="https://github.com/minhaj-ap"
                target="_blank"
                className="px-5 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
                Visit GitHub
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
