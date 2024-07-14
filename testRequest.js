const axios = require('axios');

async function fetchProjects() {
  try {
    const response = await axios.get('https://portfolio-13-w3hb.onrender.com/projects');
    console.log('Fetched Projects:', response.data);
  } catch (error) {
    console.error('Error fetching data:', error.response ? error.response.data : error.message);
  }
}

fetchProjects();
