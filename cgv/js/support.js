/********************************* 
*** 고객센터 리스트 폼
******************************** */
window.addEventListener('DOMContentLoaded',(event)=>{
  createNoticeList();
});

// fetch 실행결과 => rsult(문자열) ->json변환
// Promise가 resolve되기 전에는 JSON 데이터가 준비되지 않은 상태, 변환된 데이터를 처리하려면 .then()이나 await을 사용
function createNoticeList(){
  fetch('../data/notice.json')
    .then((reuslt) => reuslt.json())  //이 시점에서 reuslt는 Promise객체
    .then((jsonData) => {
      const list = jsonData.list;
      showNoticeList(list);
    }) 
    .catch((error) => console.log(error));
}; // end of createNoticeList()


/********************************* 
*** 고객센터 메뉴 필터링
******************************** */
//1. list 배열에서 code를 filtering 새로운 배열로 반환
//2. 테이블 출력 코드 생성 -> 화면 출력
function onChangeNoticeList(code){
  fetch("../data/notice.json")
  .then((reuslt)=> reuslt.json())
  .then((jsonData)=>{
    if(code === 'total'){
      showNoticeList(jsonData.list);
    }else{
      let filterList = jsonData.list.filter((object)=> object.code === code);  // [{},{}]
      showNoticeList(filterList);
    }
  })
  .catch(()=>console.log());
}; // end of onChangeNoticeList()


/********************************* 
*** 고객센터 화면 출력 함수
******************************** */
function showNoticeList(list){

  let output =`
    <thead>
      <tr>
        <th>번호</th>
        <th>구분</th>
        <th>제목</th>
        <th>등록일</th>
        <th>조회수</th>
      </tr>
    </thead>
    <tbody>
  `;

  // forEach => <tr>~</tr>
  list.forEach((notice, i)=>{
    output += `
      <tr>
        <td>${i+1}</td>
        <td>${notice.type}</td>
        <td><a href="#">${notice.title}</a></td>
        <td>${notice.date}</td>
        <td>${notice.hist}</td>
      </tr>
    `;
  });

  output +=`
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5">1 2 3 4 5</td>
      </tr>
    </tfoot>
  `;
  document.querySelector('table').innerHTML = output;
};  // end of showNoticeList()