"use client";
import { motion } from "framer-motion";
import { FiCode, FiTrendingUp } from "react-icons/fi";
import { useData } from "@/context/data-context";

export default function LeetCodeSection() {
  const { LeetCode, loading } = useData();
  const isEmpty = LeetCode?.length === 0;

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900" id="algo">
      <div className="max-w-6xl mx-auto px-6">
        {loading && <p>Loading...</p>}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Algorithm Practice
        </motion.h2>

        {isEmpty ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl"
          >
            <FiCode className="mx-auto w-12 h-12 text-teal-500 dark:text-teal-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-500 dark:text-gray-400 mb-2">
              DSA Journey in Progress
            </h3>
            <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto">
              Currently sharpening my problem-solving skills on LeetCode. First
              solutions coming soon!
            </p>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LeetCode?.map((problem) => (
              <motion.div
                key={problem.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className={`p-5 rounded-lg border ${
                  problem.difficulty === "Easy"
                    ? "border-green-200 dark:border-green-900/50 bg-green-50/30 dark:bg-green-900/10"
                    : problem.difficulty === "Medium"
                    ? "border-yellow-200 dark:border-yellow-900/50 bg-yellow-50/30 dark:bg-yellow-900/10"
                    : "border-red-200 dark:border-red-900/50 bg-red-50/30 dark:bg-red-900/10"
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-lg">{problem.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      problem.difficulty === "Easy"
                        ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                        : problem.difficulty === "Medium"
                        ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
                        : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
                    }`}
                  >
                    {problem.difficulty}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {problem.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
                {problem.solutionLink && (
                  <a
                    href={problem.solutionLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:underline"
                  >
                    <FiCode className="mr-1" />
                    View Solution
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* Progress CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          {!isEmpty && (
            <a
              href="https://leetcode.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-3 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg transition-colors"
            >
              <FiTrendingUp className="mr-2" />
              Track My Progress
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
