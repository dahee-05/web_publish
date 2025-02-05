/* 레파지토리는 디비와 연동, 서비스 로직을 짜는 곳 */
import {db} from './db.js';

export const getEmployees = async() =>{ 
  const sql =`
    select  row_number() over(order by emp_id) as no,
            emp_id as id, 
            emp_name as name,
            eng_name as ename,
            gender,
            left(hire_date,10) as hiredate,
            concat(format(salary,0),'만원') as salary
    from employee`;
    
  const [rows, fields ] = await db.execute(sql)
                          .then((res)=>res)
                          .catch((error)=>console.log(error))

  return rows;
};


// 1. sql문 넣기 
// 2. db 커넥션을 이용하여 실행한 후 결과 가져오기
// 3. 호출한 곳으로 값 반환





