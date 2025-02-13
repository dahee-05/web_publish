import { db } from './db.js';

export const addCart = async({id, cartList}) => {
  let result_rows = 0;

  const result = await Promise.all( // [1,1,1...]
        cartList.map(async(item)=> {
          const sql = `
            insert into shoppy_cart(qty, size, cdate, id, pid)
            values(?, ?, now(), ?, ?)
          `;
          const values =[item.qty, item.size, id, item.pid];
          // console.log('values--->', values);

          const [result] = await db.execute(sql, values); // 프로미스(리엑트관리)형태로 실행
          return result.affectedRows;
        })        
  ) // promise가 여러개일 경우 all로 감싸줘야함    

  result_rows = result.reduce((acc, cur) => acc + cur, 0)
  return {"result_rows" : result_rows};
};