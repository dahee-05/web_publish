//  날짜 형식 - Date 클래스
// 
console.log(Date.now());
console.log(new Date()); 

let date = new Date();  // 현재사용하는 시스템의 날짜를 객체 생성ㄴ
console.log(date.getUTCFullYear()); // 2024
console.log(date.getMonth()+1);     // 11
console.log(date.getDate());      /// 15

console.clear();

let year = date.getFullYear().toString();
let month = date.getMonth().toString();
let day = date.getDate().toString();
let hours = date.getHours().toString();
let minutes = date.getMinutes().toString();
let seconds = date.getSeconds().toString();

// 2024년 11월 15일 => String.concat()
console.log(typeof year);
let display = year.concat('년',' ', month,'월', ' ', day,'일');
console.log(display);

// 2024년 11월 15일 => 템플릿 리터럴
display = `${year}년 ${month}월 ${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
console.log(display);


// 날짜 출력 타입 지정
console.log(date);
console.log(date.toLocaleString('KO-KR')); //문자열 로컬 시스템 기반 
console.log(date.toLocaleString('en-US')); //영문버전 
console.log(date.toLocaleDateString('ko-kr')); //2024. 11. 15.
console.log(date.toLocaleDateString('en-US')); //11/15/2024

