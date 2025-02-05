import { db } from "./db.js"; 

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