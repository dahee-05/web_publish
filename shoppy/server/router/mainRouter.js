import express from 'express';
import * as controller from '../controller/mainController.js';

const router = express.Router();

router.get('/', controller.getMain);

export default router;


// 라우팅만 함(중간에서 전달)