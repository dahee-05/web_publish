import {db} from './db.js';

/* 뷰 테이블 생성 */
export const getOrderList = async({id}) => {
  const sql =`
    select * from view_order_list where id= ?
  `;

  const [result] = await db.execute(sql, [id]);
  return result;
};
