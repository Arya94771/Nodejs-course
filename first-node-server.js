const http=require('http');

const server=http.createServer((req,res)=>{
  //console.log(req);
  console.log('hello')
  res.end('hello world');
})

const port=3001;
server.listen(port,()=>{
  console.log('Server is listeneing to port 300');
})