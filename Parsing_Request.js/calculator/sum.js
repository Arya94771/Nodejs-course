const sumRequestHandler=(req,res)=>{
  console.log("In sum request handler",req.url);
  const body=[]
  req.on("data",chunk=>{
    body.push(chunk)
  })
  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const jsonObject=Object.fromEntries(params);
    const result=Number(jsonObject.First) +Number(jsonObject.Second)
    console.log(result);
    res.setHeader("Content-Type","text/html");
  res.write('<html>');
  res.write('<head><title>Practice-set</title></head>');
  res.write('<body><h1>Sum is ${`result`}</h1></body>');
  res.write('</html>');
  return res.end();
  
  });
}


exports.sumRequestHandler=sumRequestHandler;