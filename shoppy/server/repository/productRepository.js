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


