const { sumRequestHandler }=require('./sum');


const requestHandler=(req,res)=>{
   console.log(req.url,req.method);
   if(req.url==='/'){
  res.setHeader("Content-Type","text/html");
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Welcome</h1><a href="/Calculator">Go to Calculator</a></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase()==='/calculator'){
  res.setHeader("Content-Type","text/html");
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');
  res.write('<body><h1>Here is the Calculator</h1><form action="/calculate-result" method="POST"><input type="text" placeholder="First Num" name="First"/><input type="text" placeholder="Second Num" name="Second"/><input type="submit" value="Sum"/></form></body>');
  res.write('</html>');
  return res.end();
}else if(req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
  return sumRequestHandler(req,res);
}
res.setHeader("Content-Type","text/html");
  res.write('<html>');
  res.write('<head><title>Go to Home</title></head>');
  res.write('<body><h1>404 Page not Found Error</h1><a href="/">Go to Calculator</a></body>');
  res.write('</html>');
  return res.end();
  
}

exports.requestHandler=requestHandler;