const http = require('http');
const user = 'Luis'

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Welcome to My Non-Optimized Web Server</h1></body></html>');
    res.end();
  } else if (req.url === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>About Us</h1><p>This is a non-optimized web server created for learning purposes.</p></body></html>');
    res.end();
  } else if (req.url === '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>Contact Us</h1><p>You can contact us at example@example.com</p></body></html>');
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>');
    res.end();
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});