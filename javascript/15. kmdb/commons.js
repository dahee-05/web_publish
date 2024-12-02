/* KMDB API 호출 */
export async function kmdb(type, value, title){
  const servicekey = `LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/`;
  url += `search_api/search_json2.jsp?collection=kmdb_new2&detail=Y`;
  url += `&${type}=${value}&title=${title}&ServiceKey=${servicekey}`;

  console.log(`url--> ${url}`);
  let api = await fetch(url); // api는 문자열
  let jsonData = await api.json();

  return jsonData;
}; 


/* KMDB API 호출 */

