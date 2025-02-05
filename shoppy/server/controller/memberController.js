import * as repository from '../repository/memberReposirory.js';
// import { JsonWebTokenError } as jwt from 'jsonwebtoken';
import jwt from 'jsonwebtoken';


/***************************
 * 1. 회원가입 registeMember
***************************/
export const registeMember = async(req, res) => {
  const result = await repository.registeMember(req.body);
  res.json(result);
  res.end();
};

/***************************
 * 2. id 중복체트
***************************/
export const getIdCheck = async(req, res) =>{
  // console.log('id--->', req.body);
  const result = await repository.getIdCheck(req.body);
  res.json(result);
  res.end();
};

/***************************
 * 3. 로그인 checkLogin
***************************/
export const checkLogin = async(req, res) => {
  // console.log(req.body);
  let result = await repository.checkLogin(req.body);
  if(result.result_rows === 1){
    // jwt 토큰 생성 및 result 객체에 추가 전송 : {result_rows:1, token:~~~}
    const token = jwt.sign({"userId":req.body.id},'4AcW5Y7kZF');
    result = {...result, "token":token};
  } 
  res.json(result);
  res.end();
};