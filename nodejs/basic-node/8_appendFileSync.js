// writeme.txt 파일에 'Hello~node.js' 문자를 추가한 후 
// 파일의 내용 출력
const fs = require('fs');

fs.appendFileSync('./writeme.txt', 'Hello~ nodejs ~',
                  (err) =>console.log(err));

let data = fs.readFileSync('./writeme.txt');
console.log(data.toString());
