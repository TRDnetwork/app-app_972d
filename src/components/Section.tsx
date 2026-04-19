import React from 'react';
import { motion } from 'framer-motion';

// PERF: Reusable animated section to reduce duplication and improve maintainability
const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default Section;

---