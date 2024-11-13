// 함수의 실행결과 반환 키워드 :: return
// 함수 실행시 스택에서 실행
function add(a, b){ // input입력값은 string이기 때문
  a= parseInt(a); 
  b= parseInt(b); 
  return (a + b); 
  // 콜스택에 3을 줌 > 변수에 저장해놔야함 함수호출한곳에서 사용가능
}

let result = add(1, 2);
console.log(result);

// 이름, 나이를 매개변수로 입력하여, 객체(배열, json)를 생성한 후 
// 반환하는 함수를 정의 
function createObject(name, age){ // 2.name,age 생성 
  let obj = { // 3. 콜스택에 obj생성 > 
              name : name, 
              age : age
            }; 
  return obj; // 주소값이 넘어감
};
let obj2 = createObject('dahee', 29); // 1. 함수호출시 (함수)힙으로 가서 
console.log(obj2);
console.log(obj2.name);
console.log(obj2.age);
// 4.obj2는 obj의 주소값을 가짐


/*
1. v8엔진이 전체를 읽어 함수들을 힙에 올림 : 호이스팅 ****
2. 변수저장하는 콜스택 위쪽에 obj2를 만들어 놓음
3. createObject()를 스택아래쪽에 만들어 놓고 실행중이라면 임시저장소에 저장해놓음 > 콜스택에 힙의 주소도 갖게됨 
4.obj도 스택 위쪽에 저장하고 힙의 저장소에서 주소값을 가져옴 > 함수 종료시 해당 내용도 스택에서 삭제됨  
5. 스택위쪽에 name과 age 매개변수를 임시로 저장해놓고 함수가 끝나면 위에서도 삭제함 
6. return 값으로 스택에 만들어 놓은 obj2에 주소값을 넣어줌
*/


// 두 수를 입력받아 곱한값을 출력하는 함수를 작성해주세요
// 두수는 0보다 커야함
function multi(a, b){
  let aa = 0; // '' 로 정의 ==string/ number =0 
  if((a > 0) && (b > 0)){
    aa= (a * b);
  }else {
    aa = '0보다 큰 수를 입력해주세요.';
  }
  return aa;
}
let result2 = multi(2, 3);  // 전역변수로 바뀜, 값의 확장
console.log(`result2 : ${result2}`);

/*
let a = undefined; //전역변수 
let obj = null;    //전역변수
const --- 전역변수 : 전체파일에서 실행, 최상단 선언

function aa {
  //기능을 구현하는 작업진행으로 변수 선언시 반드시 초기화!!(기본값을 넣어줌)
  // let a = 0;
  // if문도 동일   
  // 지역,로컬변수: 블록으로 감싸있는 아이들
}


*/
