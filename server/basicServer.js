// This is just for learning purpose not part of actual project

const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    if (req.url === '/') {
        res.end('Welcome to SkillStack!');
    } else if (req.url === '/about') {
        res.end('This is the about page.');
    } else {
        res.statusCode = 404;
        res.end('Page not found.');
    }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
