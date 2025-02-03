import * as repository from '../repository/employeeRepository.js';

export const getEmployeeAll = async(req, res) =>{
  const result = await repository.getEmployeeAll(); //()를 주는이유 => 값을 받기 위해
  res.json(result);
  res.end();
};





// repository에서 db연동 / 컨트롤러에서 요청받고 응답 주는 곳
// 디비 연동은 비동기, promise는 동기 -> await, async