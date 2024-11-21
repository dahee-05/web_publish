// global 함수 : 함수명으로 호출이 가능
// ex)_parseInt(), parseFloat() ...
// parseInt(데이터): 데이터를 정수로 변환
// parseFloat(데이터): 데이터를 실수로 변환
console.clear();

let a = "100.10";
a = parseInt(a); //정수
a = parseFloat(a);  //실수(소수점 포함) 
console.log(typeof a);
console.log(a);


// uri 인코딩 : ex)_ http://www.naver.com
let uri = 'http://www.naver.com';
let encode = encodeURI(uri);
console.log(encode);

// uri 디코딩 
let decode = decodeURI(uri); // 인코딩 된 값을 넣어줌
console.log(decode);






