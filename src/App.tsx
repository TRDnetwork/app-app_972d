import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'TaskFlow App',
    description: 'A minimalist task manager to boost productivity with dark mode and cloud sync.',
    link: 'https://taskflow.example.com'
  },
  {
    title: 'DesignKit Library',
    description: 'Open-source UI component library for Figma and React with full documentation.',
    link: 'https://designkit.example.com'
  },
  {
    title: 'DataDash Analytics',
    description: 'Real-time dashboard for visualizing business metrics with customizable widgets.',
    link: 'https://datadash.example.com'
  }
]

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)

  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' })
  const projectsInView = useInView(projectsRef, { once: true, margin: '-100px' })

  return (
    <div className="bg-bg text-primary font-body">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-primary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Alex Turner
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl mb-8 text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Product Designer & Frontend Developer
        </motion.p>
        <motion.a
          href="#projects"
          className="inline-block bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-alt transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="container mx-auto px-6 py-20"
        style={{
          opacity: aboutInView ? 1 : 0,
          transform: `translateY(${aboutInView ? 0 : 20}px)`,
          transition: 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out'
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Me</h2>
        <p className="text-lg text-secondary max-w-3xl mx-auto leading-relaxed">
          I'm a product designer and frontend developer based in Portland, passionate about creating intuitive,
          human-centered digital experiences. With over 6 years of experience, I bridge design and code to build
          products that are both beautiful and functional.
        </p>
      </section>

      {/* Projects Section */}
      <section
        ref={projectsRef}
        id="projects"
        className="container mx-auto px-6 py-20"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-surface p-6 rounded-xl shadow-sm border border-transparent hover-lift transition-all focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2"
              initial={{ opacity: 0, y: 20 }}
              animate={projectsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
              <p className="text-secondary mb-4 leading-relaxed">{project.description}</p>
              <span className="text-accent font-medium inline-flex items-center">
                Live Demo →
              </span>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App