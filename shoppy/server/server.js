import express from 'express';
import employeeRouter from './router/employeeRouter.js';
import cors from'cors';
import memberRouter from './router/meberRouter.js';
import uploadRouter from './router/uploadRouter.js';
import productRouter from './router/productRouter.js';
import cartRouter from './router/cartRouter.js';
import orderRouter from './router/orderRouter.js';
import path from 'path';

//서버 생성 및 포트 정의
const server = express();
const port = 9000;

/* 서버의 공통적인 작업 - 다른 도메인의 요청작업을 받음*/
server.use(express.json());
server.use(express.urlencoded());
server.use(cors()); //다른 포트에서 가져오기 위해, use를 사용해 여러 http방식을 받음
// 업로드 파일 호출 경로 추가 - 이미지 호출, 저장폴더 연결(폴더이름)
server.use('/upload_files', express.static(path.join('upload_files')));

// 서버의 요청처리를 위한 미들웨어 정의  
// res.send('Hello~NodeJS2'); send()는 한번만 인식(보내는 코드를 함쳐서 보내야 함) 
// server.use('/employee', employeeRouter);
server.use('/member', memberRouter);
server.use('/uploads', uploadRouter); //실제 업로드하는 경로
server.use('/product', productRouter);
server.use('/cart', cartRouter);
server.use('/order', orderRouter);



// 대기중인 상태로 진행
server.listen(port, ()=>{
  console.log(`서버 실행중--> ${port}`);
});

// ROUTER : VIEW
// CONTROLLER
// DB 연동 작업 : REPOSITORY 