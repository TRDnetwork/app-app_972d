import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Dashboard',
    description: 'A full-featured admin dashboard with real-time analytics and order management.',
    link: 'https://demo1.example.com',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Collaborative to-do app with drag-and-drop interface and team sharing.',
    link: 'https://demo2.example.com',
  },
  {
    id: 3,
    title: 'Weather Forecast Tool',
    description: 'Minimalist weather app using live API data with location-based forecasts.',
    link: 'https://demo3.example.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-primary font-display mb-8 text-center">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

---