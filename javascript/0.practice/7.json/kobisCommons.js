

/* KOBIS 박스 오피스 정보 호출 함수 */
export async function kobisBoxOffice(type, searchDt){
  const key = '109a9287fde8058116adbf5e0b40fa00';
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
  console.log(url);
  
  let kobis = await fetch(url);
  let jsonData = await kobis.json();

  return jsonData; // 주소 값을 받음 
};

/* KMDB 영화 포스터 정보 */
export async function searchMoviePoster(movieNm,openDt){
  const key = `LCQ09IR90NICICN32M7J`;
  let url =`http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`;
  url += `collection=kmdb_new2&detail=Y&releaseDts=${openDt}&title=${movieNm}`
  url += `&ServiceKey=${key}`;

  let poster = await fetch(url);
  let jsonData = await poster.json();
  let result = [];
  result = jsonData.Data[0].Result[0].posters.split('|')[0];
  return result;
};


/* KMDB 영화 상세 정보 */
export async function kmdbMovieDeatil(movieNm, openDt){
  const key = `LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`
  url += `collection=kmdb_new2&detail=Y`;
  url += `&title=${movieNm}&releaseDts=${openDt}`;
  url += `&ServiceKey=${key}`;
  console.log(url);
  
  let result = await fetch(url);
  let jsonData = await result.json();

  return jsonData;
}; // end of kmdbMovieDeatil