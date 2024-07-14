// src/config.js
const config = {
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://portfolio-13-w3hb.onrender.com'
};

export default config;
