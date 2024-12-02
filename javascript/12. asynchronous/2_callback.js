// 파라미터 안에서 인자로 들어오는 함수
// 비동기식 처리 방식에서 callback 함수 호출
// runInDelay(callback, delay)
// setTimeout()이 있으면 무조건 비동기 방식
// 처리되었는지 전담자가 해당 코드에는 없음  >이벤트루프가 남은 로직이 있는지만 알려줌

function runInDelay(callback, seconds){
  setTimeout(callback, seconds);
};

//  1초 경과후 콜백 큐에 들어감(함수들이 모여있는 장소)
// 백그라운등에서 먼저 들어온 애부터 큐에 들ㅇ감
// 두번째꺼가 나중에 들어가도 1초이기 때문에 3초보다 먼저 큐에 들어감
runInDelay(function(){console.log(`타이머 3초 경과!!`)}, 3000);
runInDelay(() => {console.log(`타이머 1초 경과`)}, 1000);
console.log(`---프로그햄 종료----`);


