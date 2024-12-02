/* KOBIS 박스 오피스 정보 호출 함수 */
// async를 붙여야 콜스택이 await가 있음을 앎 -> await > 비동기의 순차적 처리를 위해
// fetch가져오는 데이터가 json 데이터형이지만 문자열이기 때문에 json형태로 변형
export async function kobisBoxOffice(type, searchDt) {
  const key = `109a9287fde8058116adbf5e0b40fa00`;
  let url = `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/search${type}BoxOfficeList.json?key=${key}&targetDt=${searchDt}`;
  console.log(url);
  
  let kobis = await fetch(url);      
  let jsonData = await kobis.json(); 
  return jsonData;  // 주소값을 받음
}


/* KOBIS 영화 리스트 호출 */
// rest api: 일정한 json 형태로 데이터를 가져오는 것 
export async function kobisMovieList() {
  const key = `109a9287fde8058116adbf5e0b40fa00`;
  const curPage = 1;
  const itemPerPage = 100;
  let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json?key=${key}&curPage=${curPage}&itemPerPage=${itemPerPage}`;
  console.log(url);

  let movieList = await fetch(url);
  let jsonData = await movieList.json();
  return jsonData; 
}


/* KOBIS 영화 상세 정보 */
// rest api: 일정한 json 형태로 데이터를 가져오는 것 
export async function kobisMovieDetail(movieCd) {
  const key = `109a9287fde8058116adbf5e0b40fa00`;
  let url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;

  let movie = await fetch(url);
  let jsonData = await movie.json();

  return jsonData; 
}

/* KOBIS 영화 포스터 정보 가져오기 */
export async function searchMoviePoster(movieNm, openDt){
  const key = `LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&detail=Y&&ServiceKey=${key}&title=${movieNm}&releaseDts=${openDt}`;

  let poster = await fetch(url);
  let jsonData = await poster.json();
  let result = [];
  result = jsonData.Data[0].Result[0].posters.split('|')[0];
  // console.log(jsonData);
  
  return result;
};


/* KOBIS 영화 상세 정보 가져오기 */
export async function kmdbMovieDeatil(movieNm, openDt) {
  const key = `LCQ09IR90NICICN32M7J`;
  let url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?`
  url += `collection=kmdb_new2&detail=Y`;
  url += `&title=${movieNm}&releaseDts=${openDt}`;
  url += `&ServiceKey=${key}`;

  let result = await fetch(url);
  let jsonData = await result.json();

  return jsonData;
}; // end of kmdbMovieDeatil
