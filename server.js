const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/deployment', (req, res) => {
  const deploymentData = JSON.parse(fs.readFileSync('deployment.json', 'utf8'));
  res.json(deploymentData);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
