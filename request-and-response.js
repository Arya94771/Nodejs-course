const http=require('http');

const server=http.createServer((req,res)=>{
  console.log(req.url,req.method,req.headers)
  if(req.url==='/'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Node.js server</title></head>')
  res.write('<body><h1>Welcome to Home Page</h1></body>')
  res.write('</html');
  res.end();
  }else if(req.url==='/products'){
    res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Node.js server</title></head>')
  res.write('<body><h1>Welcome to products page</h1></body>')
  res.write('</html');
  res.end();
  }
  res.setHeader('Content-Type','text/html');
  res.write('<html>');
  res.write('<head><title>Node.js server</title></head>')
  res.write('<body><h1>Welcome</h1></body>')
  res.write('</html');
  
 res.end();
})

const port=3001;
server.listen(port,()=>{
  console.log('Server is listening to port:3001');
})