// DB 연동
import {db} from './db.js';

/***************************
 * 1.회원가입 - insert
***************************/
export const registeMember = async(formData) =>{
  const sql =`
            insert into shoppy_member(id, 
                                      pwd,
                                      name,
                                      phone, 
                                      emailname, 
                                      emaildomain, 
                                      zipcode, 
                                      address, 
                                      mdate)
            values(?,?,?,?,?,?,?,?,now());
  `;
  const values = [
    formData.id,
    formData.pwd,
    formData.name,
    formData.phone,
    formData.emailname,
    formData.emaildomain,
    null,
    null
  ];

  //2. db 객체를 이용하여 SQL 실행 후 결과 가져오기
    const [ result, fields ] = await db.execute(sql, values);
    // console.log(result);  // ResultSetHeader{}의 affectedRows: 1 이 나오면 insert/update/delete 성공
    // console.log(fields);  // INSERT 이기 때문에 undefined
    
  //3. 결과값 반환 -> 오브젝트 리터럴 형태로 반환
  return {"result_rows": result.affectedRows};
};




/***************************
 * 2. 아이디 중복체크 , 
 * idData = {"id":"test"} // select 쿼리는 []로 묶어서 반환
 * id 값을 바로 받으려면 구조분해할당 async({id}), values 자리에 [id]
***************************/
export const getIdCheck = async({id}) =>{
  const sql = `
    select count(id) as result 
    from shoppy_member 
    where id=?
  `;
  // const values = [idData.id];
 
  const [ result , fields] = await db.execute(sql, [id]);
  // console.log('result--->', result); // [{result : 1}] --> 배열-->오브젝트로 보내야함
  return result[0];
};


/***************************
 * 3. 로그인 checkLogin
***************************/
export const checkLogin = async({id, pwd}) => { //{id:'test', pwd:'1'}
  const sql = `
    select count(id) as result_rows 
      from shoppy_member 
      where id=? 
      and pwd =?
  `;

  const [result] = await db.execute(sql, [id,pwd]); // 어째서 [result]가 [{},{}..]이런 형태?
  
  return result[0];
};