import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/globel.css';  // Global resets and base styles (load first)
import './styles/components.css';  // Component-specific styles (load second for cascading overrides)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);