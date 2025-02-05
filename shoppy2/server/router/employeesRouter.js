/* 라우터는 각 url에 맞는 컨트롤러로 이동시켜줌 */
import express from 'express';
import * as controller from '../controller/employeesController.js';

const router = express.Router();

router.use('/all', controller.getEmployees);


export default router;