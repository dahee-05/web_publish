import express from 'express';
import mainRouter from './router/mainRouter.js';
import helloRouter from './router/helloRouter.js';
import employeeRouter from './router/employeeRouter.js';
import cors from'cors';

//서버 생성 및 포트 정의
const server = express();
const port = 9000;

/* 서버의 공통적인 작업 - 다른 도메인의 요청작업을 받음*/
server.use(express.json());
server.use(express.urlencoded());
server.use(cors());


// 서버의 요청처리를 위한 미들웨어 정의  
// res.send('Hello~NodeJS2'); send()는 한번만 인식(보내는 코드를 함쳐서 보내야 함) 
server.use('/',mainRouter)
      .use('/hello',helloRouter)
      .use('/employee', employeeRouter);


// 대기중인 상태로 진행
server.listen(port, ()=>{
  console.log(`서버 실행중--> ${port}`);
});

// ROUTER : VIEW
// CONTROLLER
// DB 연동 작업 : REPOSITORY 