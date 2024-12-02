import { kobisBoxOffice as boxOffice, searchMoviePoster } from './kobisCommons.js';

window.addEventListener('DOMContentLoaded', function () {
  initForm(); // body부터 처리하고 처리한다
} );

function initForm() {
  const output = `
    <h1>KOBIS 박스 오피스</h1>
    <div id="search">
       <select id="type">
        <option value="default">선택</option>
        <option value="Daily">일별</option>
        <option value="Weekly">주간/주말</option>
      </select>
      <input type="text" id="searchDt"  placeholder="예시 20241122"> 
      <button type="button" id="searchBtn">Search</button>
    </div>
    <div id="result"></div>
  `;

  document.querySelector('body').innerHTML = output; // output을 실행한 다음에 이벤트 실행 **
  
  searchBoxOffice('Daily', '20240101');

  /* search 버튼 이벤트 */
  let searchButton = document.querySelector('#searchBtn');
  
  searchButton.addEventListener('click', () => {
    /*  searchDt 입력창, 박스오피스 타입의 유효성 체크 */
    let type = document.querySelector('#type');
    let searchDt = document.querySelector('#searchDt').value;
    let searchDtElement = document.querySelector('#searchDt');
    // alert(type + searchDt);
    if(type.value === 'default'){
      alert('박스오피스 타입을 선택해주세요');
      type.focus();
    }else if(searchDt === '' ){
      alert('검색일자를 입력해주세요');
      searchDtElement.focus();  // 왜 안되지? - 
      // searchDt는 문자열:focus()함수가 존재하지 않음 -> dom형태로 가져와야함
      // searchDtElement로 따로 dom형태로 저장해서 사용
    } else {
      
      searchBoxOffice(type.value, searchDt);  // 일별 박스오피스 정보 화면 출력
    }
  });
} // end of initForm


/* 일별 박스 오피스 정보 화면 출력 */ 
function searchBoxOffice(ktype, searchDt){
  boxOffice(ktype, searchDt) //promise 객체로 리턴
        .then((result) => {
          const rankType = ktype.toLowerCase();
          console.log(rankType);
          
          const type = result.boxOfficeResult.boxofficeType;
          const range = result.boxOfficeResult.showRange;
          let rankList = null;
          // let moviePoster = [];
          let posterList = []; // 포스터 이미지 저장

          if(ktype === 'Daily'){
            rankList  = result.boxOfficeResult.dailyBoxOfficeList;
          }else if(ktype === 'Weekly') {
            rankList  = result.boxOfficeResult.weeklyBoxOfficeList;
          }
          
          // 영화 포스터 가져오기 - KMDB
          
          for(rank of rankList){
            let openDt = element.openDt.replaceAll('-','')
            posterList.push(searchMoviePoster(movieNm, openDt));
            
          

          let output = `
            <h3>박스 오피스 타입 :  ${type}</h3>  
            <h3>박스 오피스 일자 :  ${range}</h3>  
            <table border=1>
              <thead>
                <tr>
                  <th>순위</th>
                  <th>제목</th>
                  <th>개봉일</th>
                  <th>일별 관객수</th>
                  <th>누적 관객수</th>
                </tr>  
              </thead>`;
// for..of
          rankList.forEach((element, i) => {
            
            output += `
            <tbody>
              <tr>
                <td>${element.rank}</td>
                <td><img src="${poster[i]}" width="100px" class="a">${element.movieNm}</td>
                <td>${element.openDt}</td>
                <td>${element.audiCnt}</td>
                <td>${element.audiAcc}</td>
              </tr>
            </tbody>
            <img src="${poster[i]}" width="100px">
          `;
        });
      }
            output += `</table>`;
            // console.log(output);
            
        // 테이블 화면 출력
        document.querySelector('#result').innerHTML = output;

        // 이미지 클릭 이벤트
        document.querySelector('.a').addEventListener('click', () => {
          alert('이미지 출력');
        })
        }).catch();
      })
      .catch();
    };
              
/* 순차적으로 비동기식 호출을 위해 getPoseter 함수 생성 */
async function getPoseter(movieNm, openDt) {
    return await searchMoviePoster(movieNm, openDt);
};


// searchDt를 전역변수로 선언시 searchButton함수에서 값을 못가져오는 이유 
// 전역 변수로 선언된 searchDt는 코드가 처음 실행될 때 단 한 번 실행되어 페이지 로드 시점의 값을 읽어옴 > 문자열로 저장되기 때문에 DOM 요소가 아니기 때문에 이후 사용자 입력이나 값 변경이 반영되지 않음
// searchDt를 문자열이 아닌 DOM 요소로 저장해야 함 > 이벤트가 발생할 때마다 .value를 호출해 최신 값을 가져오려면 dom으로 저장하고 .value로 문자열로 불러와야함
// 만약 전역 변수로 사용하고 싶다면 let searchDt = document.querySelector('#searchDt').value;를 문자열이 아닌 DOM요소에 저장해햐함 
// let searchDt = document.querySelector('#searchDt');로 전역변수에 DOM으로 저장해놓고 해당 함수에서 호출해서 사용할때는 alert(searDt.value)로 선언해서 사용하면 정상 작동된다. 