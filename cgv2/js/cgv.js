import { kobisMovieChart, kmdbMoviePoster  } from './kobisCommons.js';

window.addEventListener('DOMContentLoaded', () => {
  movieChartList();
}); 

function movieChartList(){
  const date = new Date();
  // .concat(문자열로 자동 변환)
  let searchDt = date.getFullYear().toString().concat(date.getMonth()+1, date.getDate()-1);
  
  kobisMovieChart('Daily', searchDt)  
    .then((result) =>{
      let rankList = result.boxOfficeResult.dailyBoxOfficeList;
      let posterList = [];
      
      rankList.forEach((rank)=>{
        let movieNm = rank.movieNm;
        let openDt = rank.openDt.replaceAll('-','');
        
        posterList.push(getPoster(movieNm, openDt));
      }); // end of rankList.forEach 

      Promise.all(posterList)
      .then((poster) => {
        let output =`<ul>`;

        rankList.forEach((rank, i)=>{
          
            output += `
              <li> 
                <div>
                  <img src="${poster[i]}" alt="movie-chart1" width="100px" class="moviechart-img">
                </div>
                <p><h3>${rankList[i].movieNm}</h3></p> 
                <p><h5>${rankList[i].audiAcc}</h5></p>
              </li>
            `;
       });  // end of posterList forEach()
        output += `</ul>`;

        document.querySelector('.moviechart-bottom').innerHTML = output;
      })
      .catch((error) => console.log(error));
      })   // end of kobisMovieChart then()
     .catch((error)=>console.log(error));
};        // end of movieChartList()

// kobis영화차트 리스트 불러오기 > 포스터, 영화이름, 누적관객

async function getPoster(movieNm, openDt){
  return await kmdbMoviePoster(movieNm, openDt);
}


