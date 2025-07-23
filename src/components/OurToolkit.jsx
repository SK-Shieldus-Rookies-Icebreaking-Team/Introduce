
import React from 'react';
import './OurToolkit.css';

const tools = [
  { name: 'React', logo: '⚛️' },
  { name: 'Vite', logo: '⚡️' },
  { name: 'JavaScript', logo: '📜' },
  { name: 'CSS', logo: '🎨' },
];

function OurToolkit() {
  return (
    <div className="toolkit-container">
      <h2 className="toolkit-title">Our Toolkit</h2>
      <div className="toolkit-grid">
        {tools.map((tool, index) => (
          <div key={index} className="tool-item" data-tooltip={tool.name}>
            <div className="tool-logo">{tool.logo}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurToolkit;
