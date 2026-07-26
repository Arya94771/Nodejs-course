const http=require('http');

const server=http.createServer((req,res)=>{
  //console.log(req);
  //console.log(req.url,req.method,req.headers);
   res.end('hello world');
  process.exit();
})

const port=3001;
server.listen(port,()=>{
  console.log('Server is listeneing to port 300');
})