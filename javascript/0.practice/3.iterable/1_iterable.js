// 'Hello JavaScript~!!!'
const text1 = 'Hello JavaScript~!!!';
const text2 = new String(text1);

for(text of text2) console.log(text);

// [1, 2, 3, 4, 5]
const numbers = [1, 2, 3, 4, 5];
for(num of numbers) console.log(num);

// Number 클래스 생성 및 실행 >>  Number()는 iterable를 포함 x > TypeError 
// TypeError: numberClass is not iterable
const num2 = new Number(1234);
for(num1 of num2) console.log(num1);
