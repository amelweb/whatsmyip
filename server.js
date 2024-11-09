// Path: server.js
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Extract the full list of IPs from the 'x-forwarded-for' header
    const ipList = req.headers['x-forwarded-for'] || '';
    
    // Get the actual client IP (first IP in the list)
    const actualIP = ipList.split(',')[0].trim() || req.ip;
    
    // Log both the actual client IP and the full list of IPs
    console.log(`Actual Client IP: ${actualIP}`);
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
