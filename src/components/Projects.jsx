import { motion } from 'framer-motion';
import projects from '../data/projects.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -5 },
  visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.8 } },
};

function Projects() {
  return (
    <motion.section
      className="projects"
      id="projects"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2>Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="project-card"
            variants={itemVariants}
            whileHover={{ scale: 1.05, rotateX: 5, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src={project.image}alt={project.title} style={{ width: '50%', borderRadius: '8px', display: 'block', margin: '20px auto' }} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', marginTop: '10px', color: '#007bff', textDecoration: 'none',fontWeight: 'bold'}}>View Project In GitHub</a>
            {/* <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a> */}
          </motion.div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <a 
          href="https://github.com/Dixit020" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: '#333',
            color: 'white',
            padding: '12px 24px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            transition: '0.3s ease',
          }}
          onMouseEnter={(e) => e.target.style.backgroundColor = '#555'}
          onMouseLeave={(e) => e.target.style.backgroundColor = '#333'}
        >
          🔗 Visit My GitHub Profile
        </a>
      </div>
    </motion.section>
  );
}

export default Projects;