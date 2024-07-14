// src/config.js
const config = {
  apiUrl: window.location.hostname === 'localhost'
    ? 'http://localhost:3001'
    : 'https://portfoliov1-j4yt.onrender.com'
};

export default config;
