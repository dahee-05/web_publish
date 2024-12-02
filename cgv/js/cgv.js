import { kobisBoxOffice, searchMoviePoster } from './kobisCommons.js';

createMovieChartList(1);

/********************************* 
*** index -> 무비차트 리스트 생성함수
******************************** */
function createMovieChartList(page){
  const date = new Date();
  const searchDt = date.getFullYear().toString().concat(date.getMonth()+1,date.getDate()-1);
  
  kobisBoxOffice('Daily', searchDt)
    .then((result) => {
      // console.log(result);
      const rankList = result.boxOfficeResult.dailyBoxOfficeList;
      let posterList = [];          //promise(비동기)로 객체타입으로 10개의 이미지 포스터 리턴

      rankList.forEach((element)=>{ // 이름, 개봉일 가져와서 포스터 리턴
        let openDt = element.openDt.replaceAll('-','');
        let movieNm = element.movieNm;
        // console.log(movieNm, openDt);
        
        posterList.push(getPoster(movieNm, openDt));
      }); // end of rankList.forEach 

      Promise.all(posterList)    // 비동기식 처리를 묶어서 한번에 실행, promise기준으로 돌리는게 좋음
      .then((poster) => {      // 배열 형태   
          let idx = 0;
          let output =`<ul>`;
          (page === 2)? output += `<li><span id="arrow-left" class="movie-chart">&lt;&lt;</span></li>`: output += ``; 
          (page !== 1)? idx +=5 : idx = 0;  
          
          rankList.forEach((movie, i) => {
            i += idx;
            if(i < page * 5){
              output +=`
              <li>
                <div>
                  <img src="${poster[i]}" width="200px">
                </div>
                <div><h3>${rankList[i].movieNm}</h3></div>
                <div><h5>${rankList[i].audiAcc}</h5></div>
              </li>
              `;
            }
          });
          (page === 1)? output += `<li><span id="arrow-right" class="movie-chart">&gt;&gt;</span></li>`
                      : output += `</ul>`; 
           
          document.querySelector('.content-moviechart-list').innerHTML = output;
          
          // 동일한 이벤트 발생시 동일한 클래스, 다른 id로 만들어 주기
          const arrows = document.querySelectorAll('.movie-chart');
          arrows.forEach((arrow)=>{
            arrow.addEventListener('click', (event) =>{
              // console.log(event.target.id);
              (event.target.id === 'arrow-right')? createMovieChartList(2) : createMovieChartList(1);
            });
          });

          // try { //실행되지 않았을때 v8엔진에게 넘김
          //   document.querySelector('#arrow-right').addEventListener('click', ()=>{
          //     createMovieChartList(2);
          //   });
          // } catch (error) {};
          
          // try {
          //   document.querySelector('#arrow-left').addEventListener('click', ()=>{
          //     createMovieChartList(1);
          //   });
          // } catch (error) {};
          
        })
        .catch((error)=> console.log(error));
    }) // end of kobisBoxOffice.then 
    .catch((error)=> console.log(error));
};     // end of createMovieChartList

/* kobisCommons.js 파일의 searchMoviePoster비동기식 함수를 순서대로 호출-> 포스터를 순차적으로 뽑기 위해*/
// await가 없으면 랜덤하게 포스터를 뽑아옴
async function getPoster(movieNm, openDt){
  return await searchMoviePoster(movieNm, openDt);
};



