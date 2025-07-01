import Link from "next/link";
import { FaProjectDiagram, FaRobot, FaCode } from "react-icons/fa";

const options = [
  {
    key: "manage-projects",
    label: "Manage Projects",
    icon: <FaProjectDiagram className="text-3xl text-blue-500" />,
    desc: "View and edit all your projects.",
  },
  {
    key: "manage-aiprojects",
    label: "Manage AI Projects",
    icon: <FaRobot className="text-3xl text-purple-500" />,
    desc: "Oversee your AI-related work.",
  },
  {
    key: "manage-leetcode",
    label: "Manage LeetCode",
    icon: <FaCode className="text-3xl text-green-500" />,
    desc: "Manage LeetCode progress.",
  },
];

export default function AdminPage() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen p-8">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-2 text-gray-800 dark:text-gray-100">
        Admin Dashboard
      </h1>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-10">
        Choose an option to manage your content
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        {options.map((option) => (
          <Link
            href={`/admin/${option.key}`}
            key={option.key}
            className="w-full md:w-80"
          >
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-8 flex flex-col items-center cursor-pointer border border-gray-100 dark:border-gray-700 hover:scale-105 transform transition-transform">
              {option.icon}
              <h2 className="mt-4 text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {option.label}
              </h2>
              <p className="mt-2 text-gray-500 dark:text-gray-400 text-center">
                {option.desc}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
