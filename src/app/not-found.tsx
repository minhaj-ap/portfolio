import { FiAlertTriangle, FiHome, FiGithub } from "react-icons/fi";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center p-6 text-center">
      <div className="relative mb-8">
        <h1 className="text-9xl font-bold text-gray-300 dark:text-gray-700">
          4<span className="text-teal-500 animate-pulse">0</span>4
        </h1>
        <FiAlertTriangle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-5xl text-amber-400" />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        Page Not Found
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
        The route you&apos;re looking for doesn&apos;t exist.
        <span className="block mt-2 text-sm opacity-80">
          (Unless you were searching for{" "}
          <span className="font-mono text-teal-500">/the-void</span>)
        </span>
      </p>

      <div className="flex flex-wrap gap-4 justify-center">
        <Link
          href="/"
          className="flex items-center px-5 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg shadow-md transition-colors"
        >
          <FiHome className="mr-2" />
          Return Home
        </Link>
        <a
          href="https://github.com/minhaj-ap"
          target="_blank"
          className="flex items-center px-5 py-3 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg transition-colors"
        >
          <FiGithub className="mr-2" />
          My GitHub
        </a>
      </div>
      <div className="mt-12 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-lg w-full">
        <p className="text-xs font-mono text-gray-500 dark:text-gray-400">
          <span className="text-teal-500">console.info</span>(
          <span className="text-amber-400">
            &apos;Hey there! Lost? Don&apos;t worry, take a breath and try
            again.&apos;
          </span>
          )
        </p>
      </div>
    </div>
  );
}
