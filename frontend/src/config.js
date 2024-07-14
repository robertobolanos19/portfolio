// src/config.js
const config = {
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://portfolio-4-t98g.onrender.com'
};

export default config;
