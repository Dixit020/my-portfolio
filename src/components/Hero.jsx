import { motion } from 'framer-motion';
import config from '../config.js';

function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, rotateX: -10 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.div
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <motion.img
          src='dixit.jpg'
          alt={config.name}
          style={{ borderRadius: '10%',height:'50%', objectfit: 'cover', width: '170px', marginBottom: '1rem' }}
          whileHover={{ rotate: 5, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          DIXIT PRAJAPATI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          Web Devloper (Frontend & Backend)
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
        >
          🚀 I design and build clean, responsive websites that bring ideas to life using React.js, HTML, CSS, and PHP.
        </motion.p>
      </motion.div>
    </motion.section>
  );
}

export default Hero;