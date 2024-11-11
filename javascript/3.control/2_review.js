// 임의의 과일을 선택받아...
// 좋아하는 과일 : apple, orange, lemon
// 이외 과일 선택시 '좋아하는 과일 없음'

let fruit = 'mango';
let result = undefined;
if(fruit === 'apple') result = '🍎';
else if(fruit === 'orange') result = '🍊';
else if(fruit === 'lemon') result = '🍋';
else console.log(result = `${fruit}`);

console.log(`선택과일 : ${result}`);
