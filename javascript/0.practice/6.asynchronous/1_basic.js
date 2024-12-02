// 비동기식 처리 함수를 순차적으로 호출해서 처리하고자 할때...
// Promise는 static 객체라 new안줘도 됨

function runInDelay(callback, seconds){
  setTimeout(callback, seconds);
};

runInDelay(function() {console.log('타이머 3초 경과!!')}, 3000);
runInDelay(() => {console.log('타이머 1초 경과!!')}, 1000);
console.log('-- 프로그램 종료 --');
