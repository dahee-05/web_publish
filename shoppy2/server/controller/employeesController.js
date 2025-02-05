/* 컨트롤러는 요청을 받고 응답을 보내는 곳 */
/* req.params, req.body */
import * as repository from '../repository/employeesRepository.js';

export const getEmployees = async(req, res) => {
  const result = await repository.getEmployees(); // ()를 주는 이유 : 값을 받기 위해 
  res.json(result);
  res.end();
};

// 레파지토리로 값을 보낼 경우 오브젝트 리터럴로 보내야함
// 디비 연동은 비동기, promise는 동기 --> await, async