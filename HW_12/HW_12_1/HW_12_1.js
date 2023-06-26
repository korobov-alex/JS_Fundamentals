const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60);
  const currentDir = process.cwd();
  const serverFileName = path.basename(__filename);

  const response = `
    <h1>System Information</h1>
    <p>Username: ${username}</p>
    <p>OS Type: ${osType}</p>
    <p>Uptime (minutes): ${uptime}</p>
    <p>Current Directory: ${currentDir}</p>
    <p>Server File Name: ${serverFileName}</p>
  `;

  res.end(response);
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});