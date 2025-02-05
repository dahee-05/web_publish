import { db } from "./db.js"; 


/*******************************
 * 회원가입 성공 여부
 *******************************/
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

  const [result, fields] = await db.execute(sql, values);
  //  console.log('result --->', result);
                        
  return {"result_rows":result.affectedRows};
};


/*******************************
 * 회원가입 id 중복체크
 *******************************/
export const getIdCheck = async({id}) =>{
  const sql =`
    select count(*) as result 
    from shoppy_member 
    where id=?
  `;

  const [result, fields] = await db.execute(sql, [id]);
  // console.log('result --->', result);  // [{ result : 1}] 
  return result[0];
};



/*******************************
 * 로그인 checkLogin
 *******************************/
export const checkLogin = async({id, pwd}) =>{
  const sql =`
    select count(*) as result_rows
    from shoppy_member
    where id = ? 
    and pwd =? 
  `;

  const [result] = await db.execute(sql, [id, pwd]);  // [ { result_rows: 1 } ]
  return result[0];
};