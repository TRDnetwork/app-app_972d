import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

export const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <motion.article
      className="bg-surface p-6 rounded-lg shadow-sm border border-primary/10 hover-lift transition-all focus-within:shadow-md focus-within:outline-none focus-glow"
      tabIndex={0} // a11y fix: Make card focusable for keyboard navigation
      role="article"
      aria-labelledby={`project-title-${title.replace(/\s+/g, '-')}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      tabIndex={0}
    >
      <h3
        id={`project-title-${title.replace(/\s+/g, '-')}`}
        className="text-xl md:text-2xl font-semibold text-primary mb-3 font-display"
      >
        {title}
      </h3>
      <p className="text-secondary mb-4 font-body leading-relaxed">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-accent hover:text-accent-alt font-medium inline-flex items-center focus:underline focus-glow"
        aria-label={`View live demo of ${title}`}
      >
        View Demo
        <span className="ml-1" aria-hidden="true">
          →
        </span>
      </a>
    </motion.article>
  );
};