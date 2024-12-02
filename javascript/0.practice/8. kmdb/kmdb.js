import { kmdbMovieApi } from './commons.js';

window.addEventListener('DOMContentLoaded', () => {
  initForm();
});

/* KMDB 폼(?) */
function initForm(){
  let output = `
    <h1>KMDB API</h1>
    <div>
      <select id="type">
        <option value="default">선택</option>
        <option value="director">영화감독</option>
        <option value="actor">영화배우</option>
      </select>
      <input type="text" id="type_value" placeholder="영화감독/영화배우 입력">
      <input type="text" id="title" placeholder="영화제목을 입력해주세요">
      <button type="button" id="searchBtn">Search</button>
    </div>
    <div id="result"></div>
  `;

  document.querySelector('body').innerHTML = output;

  // 입력값 유효성 체크 
  let type = document.querySelector('#type');
  let typeValue = document.querySelector('#type_value');
  let title = document.querySelector('#title');

  searchBtn.addEventListener('click', ()=> {
    if(type.value === 'default'){
      alert('타입을 선택해주세요');
      type.focus();
    }else if(typeValue.value === ''){
      alert('영화감독/ 영화배우를 입력해주세요');
      typeValue.focus();
    }else if(title.value === ''){
      alert('영화 제목을 입력해주세요');
      title.focus();
    }else{
      searchMovieResult(type.value, typeValue.value, title.value);// 영화 api 가져오기 
    }
  });
}

/* 영화 정보 api가져오기 */
function searchMovieResult(type, value, title){
  kmdbMovieApi(type, value, title)
    .then((result) => {
      let count = result.TotalCount;
      let output ='';
       

      if(count){
        let info = result.Data[0].Result[0];
        let mtitle = info.title.replaceAll('!HS', '').replaceAll('!HE','');
        let releaseDate = info.ratings.rating[0].releaseDate;
        let staffs = info.staffs.staff[0].staffNm;
        let posterArray = info.posters.split('|');
  
        let output = `
          <div class="container">
            <div class="container-content">
              <h3>${mtitle}</h3>
              <h5>${info.titleEng} -${info.prodYear}년</h5>
              <hr>
              <p><span>[${info.type}]  ${info.rating}  ${info.nation} ${info.runtime}분 ${releaseDate}(개봉)</span></p>
              <p><span>제작사 </span><span>${info.company}</span></p>
              <p><span>감독 </span><span>${staffs}</span></p>
              <p><span>출연 </span><span>김태리, 조여정, 최우식</span></p>
            </div>
            <div class="container-img">
              <img src="${posterArray[0]}" alt="poster_img">
            </div>  
          </div>
          <div class="container-stills">
        `;
  
        document.querySelector('#result').innerHTML = output;
      }else{
        output +=  `<h5>검색하신 데이터가 존재하지 않습니다</h5>`
      }
       document.querySelector('#result').innerHTML = output;
    })
    .catch((error) => console.log(error));
};