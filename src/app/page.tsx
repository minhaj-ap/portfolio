import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center px-4 transition-colors duration-300">
      {/* Heading */}
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-4 animate-fadeInUp">
        Hi, I&apos;m Minhaj AP
      </h1>

      {/* Subheading */}
      <p className="text-xl md:text-2xl text-center mb-6 text-gray-600 dark:text-gray-400 animate-fadeInUp delay-300">
        A Full Stack Developer who loves building logic-driven apps
      </p>

      {/* Buttons with dark mode variants */}
      <div className="flex gap-4 animate-fadeIn delay-600">
        <Link href="#projects">
          <button className="px-6 py-2 bg-blue-600 dark:bg-blue-700 text-white rounded-2xl shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all duration-300">
            View Projects
          </button>
        </Link>
        <Link href="/resume.pdf" target="_blank">
          <button className="px-6 py-2 border-2 border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-2xl hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300">
            Download Resume
          </button>
        </Link>
      </div>
    </main>
  );
}