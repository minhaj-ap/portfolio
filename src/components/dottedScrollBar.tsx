import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "ai", label: "AI Lab" },
  { id: "algo", label: "Algorithms" },
  { id: "contact", label: "Contact" },
];

export default function NavigationDots() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation (Right Side) */}
      <div className="hidden md:block fixed right-4 lg:right-6 top-1/2 transform -translate-y-1/2 z-50">
        <motion.div
          className="flex flex-col gap-3 lg:gap-4 items-center"
          onHoverStart={() => setIsHovering(true)}
          onHoverEnd={() => setIsHovering(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className="relative flex items-center justify-end w-full"
            >
              {/* Label (right-aligned) */}
              <motion.span
                className={`absolute right-8 mr-2 text-xs font-medium whitespace-nowrap ${
                  activeSection === section.id
                    ? "text-teal-500 dark:text-teal-400"
                    : "text-gray-500 dark:text-gray-400"
                }`}
                initial={{ opacity: 0, x: 10 }}
                animate={{
                  opacity: isHovering || activeSection === section.id ? 1 : 0,
                  x: isHovering || activeSection === section.id ? 0 : 10,
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {section.label}
              </motion.span>

              {/* Dot */}
              <motion.div
                className={`w-3 h-3 rounded-full ${
                  activeSection === section.id
                    ? "bg-teal-500 scale-125"
                    : "bg-gray-400 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Mobile Navigation (Bottom Center) */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <motion.div
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-4 py-2 flex gap-3 shadow-lg"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: activeSection === "hero" ? 20 : 0,
            opacity: activeSection === "hero" ? 0 : 1,
          }}
          transition={{ type: "spring" }}
        >
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                activeSection === section.id
                  ? "bg-teal-500"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              aria-label={section.label}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}
