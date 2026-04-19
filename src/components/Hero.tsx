import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section
      id="main-content"
      aria-labelledby="hero-heading"
      className="text-center py-16 md:py-24"
      role="region"
    >
      {/* a11y fix: Ensure proper heading hierarchy and descriptive label */}
      <motion.h1
        id="hero-heading"
        className="text-4xl md:text-6xl font-bold text-primary mb-4 font-display"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        aria-label="Jane Doe, Frontend Developer & Designer"
      >
        Jane Doe
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-secondary mb-8 max-w-2xl mx-auto font-body"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Frontend Developer & Designer
      </motion.p>
      <motion.button
        className="bg-accent hover:bg-accent-alt text-white px-6 py-3 rounded-lg font-semibold transition-colors focus-glow focus:outline-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        aria-label="View my projects"
        whileHover={{ scale: 1.05 }}
        whileFocus={{ scale: 1.05 }}
      >
        View My Projects
      </motion.button>
    </section>
  );
};