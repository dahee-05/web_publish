/* KOBIS 박스 오피스 정보 호출 함수 */
// KOBIS - 일별 박스오피스 

let key = '109a9287fde8058116adbf5e0b40fa00';
let target = '20241121';
let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1. Response 객체
fetch(url)
  .then((response) => {console.log()})
  .catch((error) => {error});

// 2. json 데이터 가져오기
let result = await fetch(url);  // Response 객체
let jsonData = await result.json(); // json 객체 타입으로 변환> 객체or배열
console.log(jsonData);
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(`rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0]}`);
console.log(`rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);



/* "result"
Response {
  status: 200,
  statusText: 'OK',
  headers: Headers {
    date: 'Fri, 22 Nov 2024 07:59:44 GMT',
    'content-type': 'application/json;charset=utf-8',
    'transfer-encoding': 'chunked',
    connection: 'keep-alive',
    server: '.'
  },
  body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },       
  bodyUsed: false,
  ok: true,
  redirected: false,
  type: 'basic',
  url: 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=109a9287fde8058116adbf5e0b40fa00&targetDt=20241121'
}
*/

/*  "jsonData"
{
  boxOfficeResult: {
    boxofficeType: '일별 박스오피스',
    showRange: '20241121~20241121',
    dailyBoxOfficeList: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ]
  }
}
*/