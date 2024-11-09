// Path: server.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  // Get the IP address of the client
  const ip = req.headers['x-forwarded-for'] || req.ip;
  
  console.log(`Request received from IP: ${ip}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
