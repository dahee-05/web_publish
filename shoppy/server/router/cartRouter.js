import express from 'express';
import * as controller from '../controller/cartController.js';


const router = express.Router();

router.post('/add', controller.addCart)
      .post('/items', controller.getItems)
      .post('/count', controller.getCartCount)
      .put('/updateQty', controller.updateQty);

export default router;
