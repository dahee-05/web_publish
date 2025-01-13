const path = require('path');
const string = __filename;  // 현재 실행 중인 파일 경로 

console.log(path.sep);  // \
console.log(string);    // 현재 실행 중인 파일 경로 출력

// C:\dev\web_publish\nodejs\basic-node\3_path.js 경로에서 디렉토리만 출력
console.log(path.dirname(string));  // C:\dev\web_publish\nodejs\basic-node
console.log(path.extname(string));  // .js
console.log(path.basename(string)); // 3_path.js(파일명 + 확장자)
console.log(path.basename(string), path.extname(string)); // 현재 실행중인 파일명

console.log(path.dirname(string),path.join('/images')); // images 경로 추가
// C:\dev\web_publish\nodejs\basic-node \images
