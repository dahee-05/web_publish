// console.log(fs);
// fs.writeFile('파일 경로', 데이터, 콜백함수);
// 파일관련 작업은 비동기적 처리이므로 
// 하나의 파일을 읽고 쓰는 작업만 진행한다면  readFile(), writeFile()
// 여러개의 파일을 순서대로 읽고, 쓰는 작업을 한다면 readFileSyns(), writeFileSync()

const fs = require('fs');

console.log(fs);
// fs.writeFile('파일경로',데이터 , 콜백함수);

fs.writeFileSync('./writeme3.txt', '새로운 글이 작성됩니다.'
  , (error)=> console.log('에러 발생'));


  // ************************
const data = fs.readFileSync('./writeme.txt');
console.log(data.toString());
