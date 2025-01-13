// express 웹 서버 : 웹 클라이언트 받아서 처리 한 후 결과를 전송
const express = require('express');
const server = express();

/*
 * GET/POST 방식으로 요청들어오는 처리를 나열
*/
// server.get();  // app.get(path, callback [, callback ...])
// server.post(); // app.post(path, callback [, callback ...])
// server.use();  // GET/POST인지 모를때

// 브라우저가 접속하는 url - http://localhost:8081/  ->expree서버가 받음
// // path : /(root)
// req(요청) : 클라이언트 -> 서버, res(응답) : 서버 -> 클라이언트
server.get('/', (req, res)=>{
  res.send('<h1>express 서버에서 전송합니다.</h1>');
}); 


// 브라우저가 접속하는 url - http://localhost:8081/test
// path : /test
server.get('/test',(req, res)=>{
  res.send('<h1>/test로 요청한 결과 전송</h1>');
  console.log('/test 전송 완료!!');
});

// path : /param/홍길동  --> name 변수에 저장
server.get('/param/:name',(req, res)=>{
  // console.log('req->', req);
  console.log('name->', req.params.name); 
  res.send(`<h1>[${req.params.name}] 전송 완료!!</h1>`);
  // 결과를 주지 않으면 무한루프 돔
});


// 실행할 값을 콜백 함수에 넣어준다
// http://localhost:8081/ 
server.listen(8081, ()=>{console.log('서버 실행 중~')});   