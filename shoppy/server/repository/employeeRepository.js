/*
 * 1. DB 연동 라이브러리 호출 - DB서버주소, user, password, port / 별도의 파일생성
 * 2. sql 쿼리 작성
 * 3. db.js의 connection을 이용하여 실행한 후 결과 가져오기 
 * 4. 호출한 곳(controller)에 결과 리턴 
 * mysql이랑 js 연동시 값이 json 객체로 만들어짐
*/
import {db} from './db.js';

export const getEmployeeAll = async() => {
  const sql = `select row_number() over(order by emp_id) as no,
                      emp_id as id, 
                      emp_name as name,
                      eng_name as ename,
                      gender,
                      left(hire_date,10) as hiredate,
                      concat(format(salary,0),'원') as salary
               from employee`;


 const [rows, fields ] =  await db.execute(sql)
                            .then((result)=>result) // [rows:[], field:[]]
                            .catch((error)=>console.log(error));
  return rows;
};


