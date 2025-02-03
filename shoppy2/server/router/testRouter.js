import express from 'express';
import * as controller from'../controller/testController.js';

const router = express.Router();

router  
      .get('/', controller.getTest)
      .get('/:p', controller.getTestProduct);

export default router;