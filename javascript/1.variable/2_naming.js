/*
* 네이밍 규칙 
: 한번 정의한 변수명은 바꾸지 말고 사용, nodemon에서 바꾸기 전 변수 값을 가지고 있음
*/ 

/*
 * 변수명 선언 규칙 
 *  - 라틴어 (0-9, a~z, A~Z )
 *  - 특수문자($, _)
 *  - camel case : ex)_ camelCase
 *  - snake case : ex)_ snake_case
 *  
 * 주의사항
 *  - 숫자로 시작하면 X 
 *  - 예약어(키워드) X 
 *  - 특수문자 ($, _ )사용 가능
 *  - 이모지 사용불가
 */

let myName = "홍길동";
let myAge = 30;


console.log(myName);
console.log(myAge);

// snake_case 
let audio_name = "삼성";
let audio_color = "Red";

console.log(audio_name);
console.log(audio_color);


// 저의 이름은 홍길동이고, 나이는 30입니다. 
let output = "저의 이름은 " +myName+ "이고, 나이는" +myAge + '입니다.' ;
// console.log(output);

// 템플릿 리터럴 : 저의 이름은 홍길동이고, 나이는 30입니다. 
let output2 = `저의 이름은 ${myName}이고, 나이는 ${myAge} 입니다.` ;
console.log(output2);

// 상수 선언 - 값 변경 불가, 변수,상수는 프로그램 상단에 위치 
// 상수 선언시 모두 대문자로 선언 Good !!
const START_DEVICE = 1;
const CONTI = 2;
const FINISH = 0;


