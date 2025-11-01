import config from '../config.js';

function Resume() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Resume</h1>
      <p>Download my resume: <a href={config.resumeLink} target="_blank" rel="noopener noreferrer">Here</a></p>
      {/* Add resume content or embed PDF */}
    </div>
  );
}

export default Resume;