// src/config.js
const config = {
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://portfolio-12-s2fz.onrender.com'
};

export default config;
