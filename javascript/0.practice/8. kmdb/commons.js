
/* KMDB API 가져오기 */
export async function kmdbMovieApi(type, value, title){
  const key = `LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/`
  url += `search_json2.jsp?collection=kmdb_new2&detail=Y&${type}=${value}&title=${title}`;
  url += `&ServiceKey=${key}`;
  console.log(`url--> ${url}`);

  let movie = await fetch(url);       // json형태이긴 하나 문자열이라 json형태로 변형필요
  let jsonDate = await movie.json();
  return jsonDate;
}
