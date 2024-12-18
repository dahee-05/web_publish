/*******************************
 ** Form 초기화 이름 생성 함수
 *******************************/

 export const initFormNames = (initArray) => {
  const init =  initArray.reduce((acc, key) => {
    acc[key] = '';
    return acc;       // return을 해야 {}에 반복되어 값이 들어감
  }, {});             //리턴타입 {}오브젝트 리터럴 === acc(누적 값) -> acc={'id':''}     
  return init;
 };
