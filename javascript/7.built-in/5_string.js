// String 클래스의 메소드 정리 
//

console.clear();

let name = '홍길동';
let sname = new String('홍길동');
console.log(typeof name, typeof sname);
console.log(name === sname);
console.log(name === sname.valueOf());

// 문자하나하나를 char > 배열에 하나씩 넣음
let text = 'Hello JavaScript~!!!';
console.log(text.charAt(0));
console.log(text.charAt(6));
console.log(text[0]);
console.log('Welcom~ '.concat(text)); // 결합 welcom~ Hello JavaScript~~!!
console.log(text.indexOf('a'));  //0
console.log(text.indexOf('H'));  //0
console.log(text.indexOf('J'));  //6
console.log(text.toUpperCase());
console.log(text.toLowerCase());

// 입력폼 -->        --> DB 저장시 소문자 저장

// 문자열 추출 
console.log(text.substring(0,2));  // He, end자릿수 전까지 추출
console.log(text.substring(4,8));  // o Ja
console.log(text.slice(0,2));      // He, 
console.log(text.slice(4));        // o JavaScript~!!!, stat만 지정 가능
console.log(text.slice(-3));      //!!!, '-'활용시 뒤부터 지정 가능

// 문자열 공백 삭제
text = '          JavaScript          ';
console.log(text.trim());   //JavaScript, 앞뒤 공백삭제
text2 = '          Java       Script          ';
console.log(text2.trim()); // 문자열 사이 공백은 삭제불가능

// 구분자를 이용하여 문자열 추출 
const fruit = '🍎,🍓,🍏,🍋';  // 문자열
const fruitArray = fruit.split(',');  // 배열
console.log(fruitArray);










