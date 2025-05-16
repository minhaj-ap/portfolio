import { motion, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  FiServer,
  FiDatabase,
  FiCode,
  FiGitBranch,
} from "react-icons/fi";
import { useState, useEffect } from "react";

const skills = [
  {
    name: "Node.js/Express",
    level: 95,
    icon: <FiServer className="text-teal-500" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    level: 90,
    icon: <FiDatabase className="text-teal-500" />,
    category: "Database",
  },
  {
    name: "Next JS",
    level: 95,
    icon: <FiCode className="text-teal-500" />,
    category: "Frontend",
  },
  {
    name: "Python",
    level: 50,
    icon: <FiServer className="text-teal-500" />,
    category: "Learning",
    isLearning: true,
  },
  {
    name: "TypeScript",
    level: 40,
    icon: <FiCode className="text-teal-500" />,
    category: "Learning",
    isLearning: true,
  },
  {
    name: "Git",
    level: 80,
    icon: <FiGitBranch className="text-teal-500" />,
    category: "Tools",
  },
];


export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isLoading, setIsLoading] = useState(false);
  console.log(isInView);
  useEffect(() => {
    if (isInView) {
      setIsLoading(true); 
    }
  }, [isInView]);
  return (
    <section
      id="skills"
      className="py-16 px-6 overflow-hidden bg-blue-50/80 dark:bg-gray-800/90 mx-auto relative min-h-[450px]"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        ref={ref}
      >
        Technical Arsenal
      </motion.h2>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 max-w-6xl mx-auto"
          >
            {skills.map((skill) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.1 * skills.indexOf(skill),
                }}
                className="group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{skill.icon}</span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {skill.name}
                      {skill.isLearning && (
                        <span className="ml-2 text-xs bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 px-2 py-1 rounded-full">
                          Learning
                        </span>
                      )}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2 * skills.indexOf(skill),
                    }}
                    className="h-full bg-gradient-to-r from-teal-400 to-teal-600 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
