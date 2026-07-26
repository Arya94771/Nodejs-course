const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Common navbar for every page
  const navbar = `
    <h2>Myntra</h2>
    <a href="/">Home</a> |
    <a href="/men">Men</a> |
    <a href="/women">Women</a> |
    <a href="/kids">Kids</a> |
    <a href="/cart">Cart</a>
    <hr>
  `;

  if (req.url === '/') {
    res.write(navbar);
    res.write('<h3>Welcome to Home section</h3>');
    return res.end();
  }

  if (req.url === '/men') {
    res.write(navbar);
    res.write('<h3>Welcome to Men section</h3>');
    return res.end();
  }

  if (req.url === '/women') {
    res.write(navbar);
    res.write('<h3>Welcome to Women section</h3>');
    return res.end();
  }

  if (req.url === '/kids') {
    res.write(navbar);
    res.write('<h3>Welcome to Kids section</h3>');
    return res.end();
  }

  if (req.url === '/cart') {
    res.write(navbar);
    res.write('<h3>Welcome to Cart section</h3>');
    return res.end();
  }

  // 404 fallback
  res.write(navbar);
  res.write('<h3>404 - Page Not Found</h3>');
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});