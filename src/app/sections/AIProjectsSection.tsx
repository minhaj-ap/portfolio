import { motion } from "framer-motion";
import { FiGithub, FiUsers, FiCpu } from "react-icons/fi";
type AIProject = {
  title: string;
  description: string;
  features: string[];
  tech: string[];
  github?: string;
  contributorsWelcome: boolean;
};

const aiProjects: AIProject[] = [
//   {
//     title: "Review Analyzer API",
//     description:
//       "NLP-powered endpoint for summarizing reviews and extracting ratings",
//     features: ["Sentiment analysis", "Rating prediction", "Text summarization"],
//     tech: ["Python", "FastAPI", "spaCy", "Transformers"],
//     github: "repo-link", 
//     contributorsWelcome: true,
//   },
];

export default function AIProjectsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
        >
          Open-Source AI Projects
        </motion.h2>

        {aiProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center py-16 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl"
          >
            <FiCpu className="mx-auto w-12 h-12 text-teal-500 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              AI Lab Under Construction
            </h3>
            <p className="text-gray-500 dark:text-gray-500 max-w-md mx-auto">
              Currently training models and architecting pipelines. First AI
              project coming soon!
            </p>
            <a
              href="https://github.com/minhaj-ap?tab=repositories"
              target="_blank"
              className="inline-flex items-center mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <FiGithub className="mr-2" />
              Track Progress on GitHub
            </a>
          </motion.div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {aiProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-bold text-xl text-teal-600 dark:text-teal-400">
                    {project.title}
                  </h3>
                  {project.contributorsWelcome && (
                    <span className="flex items-center bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 px-3 py-1 rounded-full text-xs">
                      <FiUsers className="mr-1" /> Seeking Contributors
                    </span>
                  )}
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-5">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Features:
                  </h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-teal-500 mr-2">•</span>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  className="inline-flex items-center px-4 py-2 bg-gray-900 hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 text-white rounded-lg transition-colors"
                >
                  <FiGithub className="mr-2" />
                  Contribute on GitHub
                </a>
              </motion.div>
            ))}
          </div>
        )}
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Interested in collaborating on AI projects?
          </p>
          <a
            href={
              aiProjects.length
                ? "mailto:minhajap00@gmail.com?subject=AI%20Project%20Collaboration&body=Hi%20Minhaj,%0A%0AI'd%20like%20to%20discuss%20contributing%20to%20your%20%5Bproject%20name%5D.%20Here's%20what%20I%20can%20bring:%0A%0A-%20Skill%20set%3A%20%0A-%20Idea%3A%20%0A%0ABest,%0A%5BYour%20name%5D"
                : "https://github.com/minhaj-ap"
            }
            target={aiProjects.length ? "_self" : "_blank"}
            className="inline-flex items-center px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md transition-colors"
          >
            <FiUsers className="mr-2" />
            {aiProjects.length ? "Become a Contributor" : "View My GitHub"}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
