
/* KOBIS 일별 박스오피스 */
export async function kobisMovieChart(type, searchDt){
  let key =`109a9287fde8058116adbf5e0b40fa00`;
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;

  let result = await fetch(url); // promise객체 형태로 아래에서 json데이터 형태로 변환
  let jsonData = await result.json();
  
  return jsonData;
}; 


/* KMDB 무비 포스터 가져오기 */
export async function kmdbMoviePoster(movieNm, openDt){
  let key =`LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&title=${movieNm}&releaseDts=${openDt}&ServiceKey=${key}`;

  let data = await fetch(url);
  let jsonData = await data.json();
  let result = jsonData.Data[0].Result[0].posters.split('|')[0]; 
  
  return result; 
}
