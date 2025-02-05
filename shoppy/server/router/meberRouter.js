import express from 'express';
import * as controller from'../controller/memberController.js';


const router = express.Router();

router.post('/signup', controller.registeMember);
router.post('/idCheck', controller.getIdCheck);
router.post('/login', controller.checkLogin);


export default router;
