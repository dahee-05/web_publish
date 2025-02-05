import * as repository from '../repository/memberReposirory.js';
import jwt from 'jsonwebtoken';

/*******************************
 * 회원가입 성공 여부
 *******************************/
export const registeMember = async(req, res) =>{
  const result = await repository.registeMember(req.body); // 오브젝트 리터럴 형식
  // console.log('Controller Result:', result);
  res.json(result);
  res.end();
};

/*******************************
 * 회원가입 id 중복체크
 *******************************/
export const getIdCheck = async(req, res) => {
  const result = await repository.getIdCheck(req.body);
  // console.log('idCheck result--->',result); //{result : 1}
  res.json(result);
  res.end();
};

/*******************************
 * 로그인 checkLogin
 *******************************/
export const checkLogin = async(req, res) =>{
  let result = await repository.checkLogin(req.body); // {id: 'test', pwd: '1'}
  // console.log('controller result-->', result.result_rows); // { result_rows: 1 }
  if(result.result_rows === 1){
    const token = jwt.sign({"id":req.body.id},'ljp3weaRcJ'); // 토큰 생성
    result = {...result, "token":token };
  }
  res.json(result);
  res.end();
};