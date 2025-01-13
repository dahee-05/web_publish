const express = require('express'); // Express.js 라이브러리를 가져옴
const server = express();          // Express 애플리케이션 인스턴스 생성

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