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



/****************************
 * 장바구니 전체 조회 --> view 테이블 생성
 ****************************/
export const getItems = async({id}) =>{
  const sql =`
      select * from view_cart_list where id= ?
  `;
  
  const [result] = await db.execute(sql, [id]);
  return result;
};

/****************************
 * 장바구니 전체 개수 조회
 ****************************/
export const  getCartCount = async({id}) =>{

  const sql = `
    select count(*) as count from shoppy_cart where id = ?
  `;

  const [result] = await db.execute(sql, [id]); // [ [{count:2}], [fields] ]
  return result[0];
};

/****************************
 * 장바구니 상품 수량 업데이트 
 ****************************/
export const updateQty = async({cid, type}) =>{
  console.log('cid-->',cid);
  console.log('type-->',type);

  const str = type === 'increase' ? 'qty= qty+1' : 'qty=qty-1';
  const sql =`
    update shoppy_cart 
    set ${str}
    where cid = ?
  `;

  const [result] = await db.execute(sql, [cid]);
  return {'result_rows' : result.affectedRows};
};


/****************************
 * 장바구니 상품 삭제
 ****************************/
export const itemDelete = async({cid}) =>{

  const sql = `
    delete from shoppy_cart where cid = ? 
  `;
  const [result] = await db.execute(sql, [cid]);
  return {'result_rows' : result.affectedRows};
};