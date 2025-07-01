import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

export default function ScrollIndicator() {
  const scrollToSkills = () => {
    document.getElementById("skills")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0], // Reduced floating range
        scale: [1, 1.03, 1],
      }}
      transition={{
        y: {
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        },
        scale: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        },
        opacity: {
          delay:2.5,
          duration: 0.5,
        },
      }}
      className=" transform -translate-x-1/2"
    >
      <motion.button
        whileHover={{
          scale: 1.05,
          boxShadow: "0 8px 20px rgba(16, 185, 129, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollToSkills}
        aria-label="Scroll Down"
        className="px-5 py-2.5 bg-gradient-to-r from-blue-500 to-teal-500 
        text-white rounded-full shadow-lg
        flex items-center gap-2 cursor-pointer relative overflow-hidden"
      >
        {/* Shimmer overlay */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
        />

        <span className="text-sm font-bold z-10">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 2, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="z-10"
        >
          <FiChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.button>
    </motion.div>
  );
}
