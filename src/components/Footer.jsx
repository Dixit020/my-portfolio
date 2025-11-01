import config from '../config.js';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Dixit Prajapati . All rights reserved.</p>
      <div>
        <a href={'https://www.linkedin.com/in/dixit-gpg-ce-dte-67b635375/'} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href={'https://github.com/Dixit020'} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={config.resumeLink} target="_blank" rel="noopener noreferrer">Resume</a>
      </div>
    </footer>
  );
}

export default Footer;