import * as repository from '../repository/memberReposirory.js';

export const registeMember = async(req, res) =>{
  const result = await repository.registeMember(req.body); // 오브젝트 리터럴 형식
  // console.log('Controller Result:', result);
  res.json(result);
  res.end();
};

export const getIdCheck = async(req, res) => {
  const result = await repository.getIdCheck(req.body);
  // console.log('idCheck result--->',result); //{result : 1}
  res.json(result);
  res.end();
};