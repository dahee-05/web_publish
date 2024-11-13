// 1. 구구단 선택함수 형식 : start ~ end 단 출력
// 입력되는 매개변수 start는 0보다 커야함
// 10단 이상은 출력되지 않도록 한다.
// import {} from '';
import {gugudan, singleGugudan, selectGugudan, fruitTower} from './fmodule_arrow.js';
 

console.clear();
gugudan(3, 5);
singleGugudan(3);
selectGugudan();

// 프루츠타워를 출력하는 함수 / fruitTower('🍎', 5); / fruitTower('🍋', 10); 


console.clear();
fruitTower('🍎', 5); 
fruitTower('🍋', 10); 