const http = require('http');
const os = require('os');
const personalModule = require('./module');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  const username = os.userInfo().username;; 

  const greeting = personalModule.greetUser(username);

  const response = `
    <h1>Greetings</h1>
    <p>${greeting}</p>
  `;

  res.end(response);
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000/');
});