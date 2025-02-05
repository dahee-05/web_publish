/* 각 라우터로 연결, 서버와 리엑트 연동 기초작업 */

import express from 'express';
import cors from'cors';
import employeesRouter from'./router/employeesRouter.js';
import memberRouter from './router/memberRouter.js';

const server = express();
const port = 9001;

/* 서버의 공통적인 작업 - 다른 도메인의 요청 작업을 받음 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors()); // 다른 포트에서 가져오기 위해 use를 사용해 여러 http방식을 받음

server.use('/employee',employeesRouter);
server.use('/member', memberRouter);

// 대기중인 상태로 진행
server.listen(port,()=>{
  console.log(`서버 실행중 --->${port}`);
});
// server.listen() --> express 서버를 특정 포트에서 실행하는 함수