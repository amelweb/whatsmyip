// Path: server.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
  const ipList = req.headers['x-forwarded-for'] || '';
  const clientIP = ipList.split(',')[0].trim() || req.ip;

  // Check if it's IPv4 or IPv6
  const isIPv6 = clientIP.includes(':');

  console.log(`Actual Client IP: ${clientIP}`);
  console.log(`IP Version: ${isIPv6 ? 'IPv6' : 'IPv4'}`);
  console.log(`Request passed through: ${ipList || 'No proxies involved'}`);

  next();
});
  
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Express server running at http://localhost:${PORT}/`);
});
