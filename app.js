const http = require('http');

const routes = {
  '/': {
    statusCode: 200,
    contentType: 'text/html',
    content: '<html><body><h1>Welcome to My Non-Optimized Web Server</h1></body></html>'
  },
  '/about': {
    statusCode: 200,
    contentType: 'text/html',
    content: '<html><body><h1>About Us</h1><p>This is a non-optimized web server created for learning purposes.</p></body></html>'
  },
  '/contact': {
    statusCode: 200,
    contentType: 'text/html',
    content: '<html><body><h1>Contact Us</h1><p>You can contact us at example@example.com</p></body></html>'
  },
  'default': {
    statusCode: 404,
    contentType: 'text/html',
    content: '<html><body><h1>404 Not Found</h1><p>The page you are looking for does not exist.</p></body></html>'
  }
};

function handleRequest(req, res) {
  const route = routes[req.url] || routes['default'];
  res.writeHead(route.statusCode, { 'Content-Type': route.contentType });
  res.write(route.content);
  res.end();
}

const server = http.createServer(handleRequest);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
