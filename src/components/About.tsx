import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section
      aria-labelledby="about-heading"
      className="py-16 px-6"
      role="region"
    >
      <div className="container mx-auto">
        {/* a11y fix: Use proper heading level after h1 in Hero */}
        <motion.h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center font-display"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.p
          className="text-lg text-secondary max-w-3xl mx-auto font-body leading-relaxed"
          style={{ maxWidth: '65ch' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I'm a frontend developer and designer passionate about building clean, accessible, and performant web experiences. With a focus on minimalism and user-centered design, I craft digital products that are both beautiful and functional.
        </motion.p>
      </div>
    </section>
  );
};