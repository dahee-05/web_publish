import * as repository from '../repository/memberReposirory.js';

/* 회원가입 registeMember */
export const registeMember = async(req, res) => {
  const result = await repository.registeMember(req.body);
  res.json(result);
  res.end();
};

/* id 중복체트 */
export const getIdCheck = async(req, res) =>{
  // console.log('id--->', req.body);
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};