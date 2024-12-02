// 전역함수 
let url = 'http://kobis.r.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20120101';

fetch(url)  // 네트워크로 접속할 서버의 주소: URL,resolve(a)
  .then((result) => {console.log(`result==>${result}`)}) // result==>[object Response]
  .catch((error) => {console.log(`error==>${error}`)}); //error==>TypeError: fetch failed