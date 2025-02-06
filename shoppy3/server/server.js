import {db} from './repository/db.js';
import express from 'express';
import * as controller from './controller/memberController.js';

const server = express();
const port = 9002;

server.post('/', controller);

server.listen(port, ()=>{
  console.log(`서버 실행중--> ${port}`);
});