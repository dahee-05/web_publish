// fetch(resourceURL) - 비동기식 처리 방식으로 네트워크를 통해 리소스를 가져옴
// KOBIS - 일별 박스오피스 

let key = `109a9287fde8058116adbf5e0b40fa00`;
let target = `20241121`;
let url = `	http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${target}`;

// 1. Response 객체
fetch(url)
    .then((response) => {console.log(response)})
    .catch((error) => {console.log(error)});

// 2. json 데이터 가져오기
let result = await fetch(url); //JSON객체가 문자열 데이터타입으로 가져옴
let jsonData = await result.json(); //.json()함수를 통해 json객체타입 변환
console.log(`type => ${jsonData.boxOfficeResult.boxofficeType}`);
console.log(`range => ${jsonData.boxOfficeResult.showRange}`);
console.log(`rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].rank}`);
console.log(`rankList => ${jsonData.boxOfficeResult.dailyBoxOfficeList[0].movieNm}`);

/*
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

// fetch 라는 함수를 사용하면 response로 응답이 넘어오는데 이것은 문자열이다 
// fetch로 받아온 값을 객체로 변환해주는 작업을 json이 한다. fetch는 json함수가 꼭 들어간다!! 

/*
- await가 없으면 result.json();에서 타입에러가 난다 
- 콜스택이 패치를 만나면 백그라운드에 보내버림 > 다음 코드 실행 > 패치 result 결과가 나오지 않은 상태에서 다음 코드 실행되어 에러가 발생 > 순차적으로 실행하는 비동기의 성격
 await fetch(url); - fetch가 실행완료 될 때 까지 기다림/ 순서를 지키며 실행할 수 있게 해줌
 - 함수를 만들때 asyn를 붙여준다 
function async test(){
  let result = await fetch(url);
  let jsonData = await result.json(); 
console.log(jsonData);
}   


*/
/*
    Response {
      status: 200,      //성공시 숫자로 리턴
      statusText: 'OK', //status의 해석
      headers: Headers {
        date: 'Fri, 22 Nov 2024 01:29:59 GMT',
        'content-type': 'application/json;charset=utf-8',
        'transfer-encoding': 'chunked',
        connection: 'keep-alive',// 계속헤서 연결유지, 요청이 올때까지 기다림
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

//TCP의 성향 -  요청이 올때까지 기다림
