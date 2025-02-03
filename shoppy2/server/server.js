import express from 'express';
import testRouter from './router/testRouter.js';

const server = express();
const port = 9001;

server.use('/test/',testRouter)
      .use('/test/:p',testRouter);

server.listen(port, ()=>{
  console.log(`port--> ${port}`);
});
// server.listen() --> express 서버를 특정 포트에서 실행하는 함수