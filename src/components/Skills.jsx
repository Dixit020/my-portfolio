import { motion } from 'framer-motion';
import { useState } from 'react';
import * as Icons from 'react-icons/fa';
import skills from '../data/skills.js';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Skills() {
  const [showAll, setShowAll] = useState(false);
  const MAX_VISIBLE = 6;
  const displayedSkills = showAll ? skills : skills.slice(0, MAX_VISIBLE);

  return (
    <section
      className="skills"
      id="skills"
      style={{ textAlign: 'center', padding: '40px 20px' }}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        key={showAll ? 'all' : 'less'} // force rerender on toggle
      >
        <h2 style={{ color: '#007bff', marginBottom: '20px' }}>Skills</h2>

        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',
            gap: '20px',
            maxWidth: '900px',
            margin: '0 auto',
          }}
        >
          {displayedSkills.map((skill, index) => {
            const IconComponent = Icons[skill.icon] || Icons.FaCode;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: '#fff',
                  borderRadius: '12px',
                  boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                  padding: '18px',
                }}
              >
                <IconComponent size={50} style={{ color: '#007bff' }} />
                <p style={{ marginTop: 10, fontWeight: 600 }}>{skill.name}</p>
              </motion.div>
            );
          })}
        </div>

        {/* See All / See Less Button */}
        {skills.length > MAX_VISIBLE && (
          <div style={{ marginTop: '25px' }}>
            <button
              onClick={() => setShowAll((prev) => !prev)}
              style={{
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 24px',
                cursor: 'pointer',
                fontSize: '15px',
                transition: 'background-color 0.2s',
              }}
              onMouseOver={(e) =>
                (e.target.style.backgroundColor = '#0056b3')
              }
              onMouseOut={(e) =>
                (e.target.style.backgroundColor = '#007bff')
              }
            >
              {showAll ? 'See Less Skills' : 'See All Skills'}
            </button>
          </div>
        )}
      </motion.div>
    </section>
  );
}

export default Skills;
