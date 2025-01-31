import express from 'express';
import * as controller from '../controller/testController.js';

const router = express.Router();

router
      .get('/', controller.getTest) 
      .get('/product', controller.getTestProduct);

/* router 정보 맵핑 */
export default router;