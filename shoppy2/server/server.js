/* 각 라우터로 연결, 서버와 리엑트 연동 기초작업 */

import express from 'express';
import cors from'cors';
import employeesRouter from'./router/employeesRouter.js';
import memberRouter from './router/memberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import path from'path';

const server = express();
const port = 9001;

// 👉 Express 미들웨어를 설정하는 코드
/* 서버의 공통적인 작업 - 다른 도메인의 요청 작업을 받음 */
server.use(express.json());
server.use(express.urlencoded());
server.use(cors()); // 다른 포트에서 가져오기 위해 use를 사용해 여러 http방식을 받음
// 업로드 파일 호출 경로 이름 / 이미지 호출, 저장폴더 연결(폴더이름)
server.use('/upload_files', express.static(path.join('upload_files')));


server.use('/employee',employeesRouter);
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter);

// 대기중인 상태로 진행
server.listen(port,()=>{
  console.log(`서버 실행중 --->${port}`);
});
// server.listen() --> express 서버를 특정 포트에서 실행하는 함수