
import { kobisBoxOffice as boxOffice, searchMoviePoster, kmdbMovieDeatil } from './kobisCommons.js';

window.addEventListener('DOMContentLoaded', function(){
  initForm();
});

function initForm(){
  let output = `
    <h1>KMDB 박스 오피스</h1>
    <div id="search">
      <select id="type">
        <option value="default">선택</option>
        <option value="Daily">일간</option>
        <option value="Weekly">주간/주말</option>
      </select>
      <input type="text" id="searchDt" placeholder="예시 20241122">
      <button type="button" id="searchBtn">Search</button>
      <div id="result"></div>
    </div>

    <div id="imageModal" class="modal">
      <div class="modal-content">
        <span id="closeModal" class="close">&times;</span>
        <img id="modalImage" src="" alt="Modal Image" style="width:100%;" />
      </div>
    </div>
  `;
  // output 실행 후 이벤트 실행
  document.querySelector('body').innerHTML = output;

  /* 일별 박스 오피스 정보 화면 default 출력 */
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() +1).toString().padStart(2,'0');
  const day = (today.getDate()-1).toString().padStart(2,'0');
  const yesterday = `${year}${month}${day}`
  console.log(`yesterday----> ${yesterday}`);
  
  searchBoxOffice('Daily', yesterday);
  /* search 버튼 이벤트 */
  let searchButton = document.querySelector('#searchBtn');

  searchButton.addEventListener('click', () =>{
    let type = document.querySelector('#type');
    let searchDt = document.querySelector('#searchDt').value;
    let searchDtElement = document.querySelector('#searchDt');

    if(type.value === 'default'){
      alert('박스오피스 타입을 선택해주세요');
    } else if(searchDt === ''){
      alert('날짜를 입력해주세요');
      searchDtElement.focus();
    } else {
      searchBoxOffice(type.value, searchDt);//일별 박스오피스 정보 화면 출력
    }
  });
}   // end of initForm


/* 일별 박스 오피스 정보 화면 출력 */
function searchBoxOffice(boxType, searchDt){
  boxOffice(boxType, searchDt) //promise 객체로 리턴
  .then((result) =>{

    let rankType = result.boxOfficeResult.boxofficeType;
    let range = result.boxOfficeResult.showRange;
    let rankList = null;
    let posterList = [];

    if(boxType === 'Daily'){
      rankList = result.boxOfficeResult.dailyBoxOfficeList;
    }else if(boxType === 'Weekly'){
      rankList = result.boxOfficeResult.weeklyBoxOfficeList;
    }

    // 영화 포스터 가져오기 -KMDB //제목, 개봉일
    rankList.forEach((rank) => {
      let movieNm = rank.movieNm;
      let openDt = rank.openDt.replace('-','');
      
      posterList.push(getPoster(movieNm,openDt));
    });
   
    /* 순차적으로 비동기식 호출을 위해 getPoster함수 생성 */
    async function getPoster(movieNm,openDt){
      return await searchMoviePoster(movieNm,openDt);
    };
   
    Promise.all(posterList)
      .then((poster) =>{

        let output = `
          <h3>박스 오피스 타입 :  ${rankType}</h3>  
          <h3>박스 오피스 일자 :  ${range}</h3>  
          <table border=1>
            <tr>
              <th>순위</th>
              <th>제목</th>
              <th>개봉일</th>
              <th>일간 관객수</th>
              <th>누적 관객수</th>
            </tr>`;
    
        rankList.forEach((element, i ) => {
              output += `     
                  <tr>
                    <td>${element.rank}</td>
                    <td>
                      <img src="${poster[i]}" class="poster" width="100px" id="${element.movieNm}${element.openDt.replace('-','')}" />
                      ${element.movieNm}
                    </td>
                    <td>${element.openDt}</td>
                    <td>${element.audiCnt}</td>
                    <td>${element.salesAcc}</td>
                  </tr>
                </tbody>
                 `;  
          });

         output += `</table>`;
    document.querySelector('#result').innerHTML = output;

    /* 이미지 클릭 이벤트 */
    const images = document.querySelectorAll('.poster');
    images.forEach((image)=> image.addEventListener('click', onMovieDetail));

    }).catch();  // promise.all(); 
  }) // end of boxOffice.then() 
  .catch();
} // end of searchBoxOffice()


/* 이미지 이벤트 처리 함수 */  
function onMovieDetail(event) {
  const modal = document.querySelector('#imageModal');
  const closeModalBtn = document.querySelector('#closeModal');  
  const modalImage = document.querySelector('#modalImage');
  let [movieNm, openDt] = event.target.id.split(',');
  
  kmdbMovieDeatil(movieNm, openDt)
    .then((result)=>{
      const imageSrc = event.target.src;  // 클릭한 이미지의 src를 가져옴
      modalImage.src = imageSrc;          // 모달 창에 이미지 넣기
      modal.style.display = 'block';
    })
    .catch((error)=> console.log(error));

    /* 모달 닫기 버튼 클릭시 모달 닫기 */
    closeModalBtn.addEventListener('click', ()=>{
      modal.style.display = 'none'; 
    });

     /* 모달 바깥쪽 클릭시 모달 닫기 */
    window.addEventListener('click', (event)=>{
      if(event.target === modal){
        modal.style.display = 'none';
      }
    });
}