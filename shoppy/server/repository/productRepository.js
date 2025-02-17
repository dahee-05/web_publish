import {db} from './db.js'; 



/****************************** 
 * 상품 등록
********************************/
export const registerProduct = async(formData) => {
  const sql =`
    insert into shoppy_product( pname,
                                price,
                                description,
                                upload_file,
                                source_file,
                                pdate)
    values(?,?,?,?,?,NOW())
  `;

  const values = [
     formData.productName,
     formData.price || 0,
     formData.description || "",
     formData.uploadFile || null,
     formData.sourceFile || null
  ];

  const [result] = await db.execute(sql, values);
  return {"result_rows": result.affectedRows};
};

/****************************** 
 * 전체 상품 리스트 조회
 * 데이터 타입이 json 일 경우  upload_file->>'$[0]를  사용                                                                                    
******************************/
export const getList = async() => {
  const sql =`
    select pid,
           pname as name,
           price,
           description as info,
           concat('http://localhost:9000/', upload_file->>'$[0]') as image,
           source_file,
           pdate
    from shoppy_product
  `;

  const [result] = await db.execute(sql); // [ [{1행},{2행},{3행}..], [fields] ]
  return result; // [{1행},{2행},{3행}..]
};



/****************************** 
 * 상품 상세 페이지 조회
******************************/
export const getProduct = async(pid) => {
  // console.log('pid-->', pid);

  const sql =`
        select pid, 
               pname,
               price, 
               description,
               upload_file as uploadFile,
               source_file as sourceFile, 
               pdate,
               concat('http://localhost:9000/', upload_file->>'$[0]') as image,
               json_array(
               concat('http://localhost:9000/', upload_file->>'$[0]'),
                      concat('http://localhost:9000/', upload_file->>'$[1]'),
                      concat('http://localhost:9000/', upload_file->>'$[2]')
               ) as imgList, 
               json_arrayagg(
               concat('http://localhost:9000/', jt.filename)
               ) as detailImgList
          from shoppy_product
               , json_table( shoppy_product.upload_file, '$[*]' columns(filename varchar(100) path '$')) as jt
          where pid=?
          group by pid 
  `;

  const [result] = await db.execute(sql, [pid]); // [ [{pid:4,~~~}], [컬럼명 fileds] ]
  // console.log('result-->', result);
  return result[0];
};


/****************************** 
 * 장바구니 상품 정보 조회
******************************/
export const getCartItems = async({pids}) =>{
  const strArray = [];
  // for(const pid of pids) strArray.push('?');  //-->join으로 문자열로 만듬
  pids.forEach(pid => strArray.push("?"));
  // console.log('strArray-->',strArray);
  

  const sql =`
    select pid,
           pname,
           price,
           description,
           upload_file, 
           concat('http://localhost:9000/', upload_file->>'$[0]') as image
    from  shoppy_product
    where pid in (${strArray.join(',')});
  `;

  // console.log('sql--->', sql);
  
  const [result] = await db.execute(sql, pids);
  return result;
}