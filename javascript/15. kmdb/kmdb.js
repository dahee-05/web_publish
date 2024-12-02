import { kmdb } from './commons.js';

window.addEventListener('DOMContentLoaded', () =>{
  initForm();
})


//arrow 함수는 호이스팅 불가, 처음 호출시 function 사용
function initForm() {
  let output =`
    <h1>KMDB API</h1>
    <div>
      <select id="type"> <!-- 서버로 바로 연동시 name사용-->
        <option value="default">선택</option>
        <option value="director">영화감독</option>
        <option value="actor">영화배우</option>
      </select>
      <input type="text" id="type_value" placeholder="영화감독/ 영화배우 입력">
      <input type="text" id="title" placeholder="영화제목을 입력해주세요">
      <button type="buttton" id="search">Search</button>
    </div>
    <div id="result"></div>
  `;

  document.querySelector('body').innerHTML = output;

  // 버튼 이벤트 추가
  let searchBtn = document.querySelector('#search');
  searchBtn.addEventListener('click', () =>{
    let type = document.querySelector('#type');
    let typeValue = document.querySelector('#type_value');
    let title = document.querySelector('#title');

    // validation check(유효성 체크)
    if(type.value === 'default'){
      alert('타입을 선택해주세요');
      type.focus();
    }else if(typeValue.value === ''){
      alert('영화감독/영화배우를 입력해주세요');
      typeValue.focus();
    }else if(title.value === ''){
      alert('영화제목을 입력해주세요');
      title.focus();
    }else{
      searchMovieResult(type.value, typeValue.value, title.value); 
      //KBDB API연동 후 출력 화면
    }
  });
} // end of initForm();


/* 1. KBDB API연동 후 출력 화면 */
function searchMovieResult(type, value, title){
  // console.log(`type= ${type}/ value= ${value}/title= ${title}`);
  /* 검색 결과 출력 Promise --> 화면 */
  kmdb(type, value, title)  // KBDB API연동
    .then((result) => {
      let count = result.TotalCount; 
      let output =``;
      let actorFive = [];
      let actorAll = [];
      // console.log(`count -> ${count}`);
      if(count){
        let info = result.Data[0].Result[0];
        let directors = info.directors.director;
        let actors = info.actors.actor;
        let posterArray = info.posters.split('|');
        let stillsArray = info.stlls.split('|');//split>문자열 배열로 반환
        let staffs = info.staffs.staff;
        let mtitle = info.title.replaceAll('!HS','').replaceAll('!HE','');
        
        actors.forEach((actor, i) => {
          if(i < 5) actorFive.push(actor.actorNm);
        });
        actors.forEach((actor) => actorAll.push(actor.actorNm));
        // console.log(actorFive);
        

        output = `
          <div class="container"> 
          <div class="container-content">
            <h3>${mtitle}</h3>
            <h5>${info.titleEng} -${info.prodYear}년</h5>
            <hr>
            <p>[${info.type}] ${info.ratings.rating[0].ratingGrade} ${info.nation} ${info.runtime}분  ${info.ratings.rating[0].releaseDate}(개봉)</p>
            <p><span>제작사 </span><span>${info.company}</span></p>
            <p><span>감독 </span><span>${staffs[0].staffNm}</span></p>
            <p>
              <span>출연 </span><span id="actors">${actorFive.join()}..</span>
              <button type="button" id="more_actors">더보기</button>
              <button type="button" id="close_actors" style="display:none">접기</button>
            </p>
          </div>
          <div class="container-img">
            <img src="${posterArray[0]}" alt="poster_img">
          </div>
        </div>
        <div class="container-stills">
        `;

        stillsArray.forEach((still) => {
          output += `<img src="${still}">`;
        });

        output += `</div>`;

        document.querySelector('#result').innerHTML = output;
        //감독 !HS 박찬욱 !HE
      //   console.log(`title --> ${info.title}`);
      //   console.log(`titleEng --> ${info.titleEng}`);
        // console.log(`directorNm --> ${directors[0].directorNm}`);
        // console.log(`directorEnNm --> ${directors[0].directorEnNm}`);
      //   actors.forEach((actor, idx) =>{
      //     if(idx < 10){
      //       console.log(`actor${idx} --> ${actor.actorNm}`);
      //       console.log(`actor${idx} --> ${actor.actorEnNm}`);
      //     }
      //   });
      //  posterArray.forEach((poster) =>console.log(`poster --> ${poster}`));
      //  stillsArray.forEach((still) => console.log(`still --> ${still}`));
      //  staffs.forEach((staff) => {
      //   console.log(`staffNm--> ${staff.staffNm}`);
      //   console.log(`staffEnNm--> ${staff.staffEnNm}`);
      //   console.log(`staffRoleGroup--> ${staff.staffRoleGroup}`);
      //   console.log(`staffRole--> ${staff.staffRole}`);
      //   console.log(`staffEtc--> ${staff.staffEtc}`);
      //   console.log(`staffId--> ${staff.staffId}`);
      // });

      }else{
        output += `<h5>검색하신 데이터가 존재하지 않습니다</h5>`
      }
      document.querySelector('#result').innerHTML = output;

      /* more _actors 더보기 이벤트 , output 출력 후 이벤트 실행 */
      document.querySelector('#more_actors').addEventListener('click', () =>{
        document.querySelector('#actors').textContent = actorAll.join(); 
        document.querySelector('#more_actors').style.display= 'none'; 
        document.querySelector('#close_actors').style.display= 'inline-block'; 
      });
      /* close_actors 접기 이벤트 */
      document.querySelector('#close_actors').addEventListener('click', () => {
        // alert('close_actors!!');
        document.querySelector('#actors').textContent = actorFive.join(); 
        document.querySelector('#close_actors').style.display= 'none'; 
        document.querySelector('#more_actors').style.display= 'inline-block'; 
      });
    })
    .catch((error) => console.log(error));

   
}; 



          