import { Link } from 'react-router-dom';
// import config from '../config.js';

function Navbar() {
  return (
    <nav className="navbar">
      <img src='dixit.jpg' alt="Logo" style={{ height: '40px' }} />
      <ul style={{ display: 'flex', listStyle: 'none', gap: '1rem' }}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/resume">Resume</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
