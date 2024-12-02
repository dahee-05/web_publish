import { kobisMovieList, kobisMovieDetail } from './kobisCommons.js';

let mlist = null; // 영화 리스트 전역변수

window.addEventListener('DOMContentLoaded',()=>{
  initForm();
});

/* 1. KOBIS 영화리스트 100개 준비 */
function createMovieList(){
  kobisMovieList()
      .then((list) => {
        // const totCnt = list.movieListResult.totCnt;
        const length = list.movieListResult.movieList.length;
        const movieList = list.movieListResult.movieList;
        mlist = movieList; // 리턴 값을 주지 않아도 전역으로 사용해서 타 함수에서 사용가능
        console.log(`length --> ${length}`);

        // for(let movie of mlist) {
        //   console.log(movie.movieNm);
        //   console.log(movie.movieCd);
        // }
      })
     .catch((error) => console.log(error));   
} 


/* 2. initForm() */
function initForm(){
  createMovieList();  //KOBIS 영화리스트 가져오기

  let output = `
    <h1>KOBIS 영화 검색</h1>
    <div>
      <input type="text" id="search_title" placeholder="제목을 입력해주세요.">
      <button type="button" id="search_button">Search</button>
    </div>
    <div id='result'></div>
  `;

  document.querySelector('body').innerHTML = output;

  // Search 버튼 이벤트 추가 및 유효성 체크 
  document.querySelector('#search_button').addEventListener('click', () =>{
    
    let title = document.querySelector('#search_title');

    if(title.value.trim() === '') {
      alert('제목을 입력해주세요');
      tsearch.focus();
    } else { 
      searchMovieList(title.value.trim());  // 영화 리스트 출력함수 호출
    }
  });
}; // end of initForm();



/* 3. 영화 코드 검색 함수 */
function searchMovieCd(title){
  let movieCd = '';
  // mlist는 전역변수로 createMovieList()에서 값을 넣어줌
  if(mlist !== null){  
    let filterMovie = mlist.filter((movie) => movie.movieNm === title);
    // console.log(`title --> ${filterMovie[0].movieNm}`);
    // console.log(`code --> ${filterMovie[0].movieCd}`);
    movieCd = filterMovie[0].movieCd;
  }
  return movieCd;
}; 


/* 4. 영화 리스트 검색 함수 */
function searchMovieList(title) {
  let movieCd = searchMovieCd(title);
  console.log(`code --> ${movieCd}`);

  kobisMovieDetail(movieCd)
    .then((result) => {
      let info = result.movieInfoResult.movieInfo; //En: 영문이름
      
      let output = `
        <ul>
          <li>
            <label>movieCd = </label>
            <span>${info.movieCd}</span>
          </li>
          <li>
            <label>movieNm = </label>
            <span>${info.movieNm}</span>
          </li>
          <li>
            <label>movieNmEn = </label>
            <span>${info.movieNmEn}</span>
          </li>
          <li>
            <label>actors = </label>
          `;

          info.directors.forEach((director) => {
            output += `<span>${director.peopleNm} |</span>`;
            output += `<span>${director.peopleNmEn}</span>`;
          });  

          output += `<li>
                      <label>actor = </label>
                     <ul> `;

          info.actors.forEach((actor) => {
            output += `<span>${actor.peopleNm} |</span>`;
            output += `<span>${actor.peopleNmEn}</span>`;
            output += `<br>`;
          });  

            output += `</ul>
                       </li>`;
      output += `  
          </li>
        </ul>
      `;

      document.querySelector('#result').innerHTML = output;
    })
    .catch((error) => console.log(error));
  
  
}; // end of searchMovieList(); 