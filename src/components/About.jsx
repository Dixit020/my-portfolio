// src/components/About.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
// import config from '../config.js';

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.section
      className="about"
      id="about"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '20px' }}>About Me</h2>

      <div style={{ overflow: 'hidden', height: expanded ? 'auto' : '120px', transition: '0.5s ease' }}>
        <p style={{ fontSize: 17, lineHeight: '1.8', textAlign: 'justify' }}>
          Hi! I'm <b>Dixit Prajapati</b>, a passionate and detail-oriented <b>Web Developer</b> from Gandhinagar, Gujarat. 
          I specialize in creating clean, responsive, and user-friendly websites using 
          <b> React.js, HTML, CSS, JavaScript, PHP, and MySQL</b>.
        </p>

        <p style={{ fontSize: 17, lineHeight: '1.8', textAlign: 'justify' }}>
          Currently, I'm pursuing my <b>Diploma in Computer Engineering</b> from 
          <b> Government Polytechnic Gandhinagar (GTU)</b>. I’ve also completed internships as a 
          <b> React Developer</b> at <i>Infolabz IT Services Pvt. Ltd.</i> and as a 
          <b> Web Developer</b> at <i>Tech Infinity</i>, where I worked on real-world projects 
          and gained hands-on experience in web technologies.
        </p>

        <p style={{ fontSize: 17, lineHeight: '1.8', textAlign: 'justify' }}>
          I love transforming ideas into functional, visually appealing digital products. 
          My focus is on writing clean code, optimizing performance, and delivering 
          high-quality work that meets client goals.
        </p>

        <p style={{ fontSize: 17, lineHeight: '1.8', textAlign: 'justify' }}>
          When I’m not coding, I enjoy learning about new technologies and improving my design sense 
          to create modern and professional web experiences.
        </p>

        <p style={{ fontSize: 17, lineHeight: '1.8', textAlign: 'justify' }}>
          💡 <b>Key Skills:</b> React.js, HTML, CSS, JavaScript, Bootstrap, PHP, MySQL, and UI/UX basics. <br />
          🚀 <b>Goal:</b> To help businesses and individuals build impactful digital solutions through creative web development.
        </p>
      </div>

      {/* Toggle Button */}
      <div style={{ textAlign: 'center', marginTop: '15px' }}>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            padding: '8px 20px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: '0.3s',
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#0056b3')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#007bff')}
        >
          {expanded ? 'See Less' : 'See All'}
        </button>
      </div>
    </motion.section>
  );
}

export default About;
