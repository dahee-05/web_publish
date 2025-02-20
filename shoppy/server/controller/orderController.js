import * as repository from '../repository/orderRepository.js';

export const getOrderList = async(req, res) => {
  const result = await repository.getOrderList(req.body);
  res.json(result);
  res.end();
};

export const add = async(req, res) =>{
  console.log('req.body--->', req.body);
  const result = await repository.add(req.body);
  res.json();
  res.end();
};