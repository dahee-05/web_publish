const express = require('express');
const server = express();

server.get('/',(req, res)=>{
  res.send('<h1>root 이동 성공적~</h1>');  
  console.log('/root 이동 성공!!');
});

server.get('/test',(req, res)=>{
  res.send('test성공');
});
server.get('/param/:name', (req, res)=>{
  // console.log(`req-->`, req);
  console.log(`req-->`, req.params.name);
  res.send(`값 : ${req.params.name}`);
});

server.listen(8082, ()=> console.log('서버 실행 성공!!'));