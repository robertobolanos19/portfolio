// src/config.js
const config = {
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://portfolio-16-8om3.onrender.com'
};

export default config;
