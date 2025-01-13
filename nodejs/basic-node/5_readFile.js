// 파일을 생성하거나 삭제하고 
// readme.txt 파일을 읽어서 내용을 화면에 출력하는 실습

const fs = require('fs');
const fsp = require('fs').promises;

// console.log(fs);

// fs.readFile('파일의 경로', 파일을 읽은 후 실행 함수[콜백함수]);
// fs.readFile('파일의 경로', function(){});
// fs.readFile('파일의 경로', ()=>{});

fs.readFile('./readme.txt', (err, data)=>{
  if(err) {
    console.log('파일 읽기 실패!!');
  }else{
    console.log(data.toString());  // 테스트 파일입니다.
  }
});

// promises 타입으로 리턴
fsp.readFile('./readme.txt')
  .then((data)=>{
    console.log('fsp-->', data.toString())
  })
  .catch((err)=>{
      console.log(err);     
  });


