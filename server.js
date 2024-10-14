const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

app.get('/api/menu', (req, res) => {
  exec('python3 backend/app.py', (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).json({ error: 'An error occurred while fetching the menu' });
    }
    res.json(JSON.parse(stdout));
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});