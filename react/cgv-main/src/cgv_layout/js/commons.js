/*
 * 내용 : 비동기식 네트워크 연동 실행 함수
 * @param {*} url
 * @returns
 * fetch를하게 되면 창고에 넣어 jsonData(동기식) 바로 실행 -> await
 * fetch 비동기식 함수로 promise로 리턴됨
*/
export async function fetchJSON(url){
   const data = await fetch(url);
   const jsonData = await data.json();

   return jsonData;
  };