/*
 * 1.primitive DataType : 기본 데이터 타입
    - string, number, boolean
    - ex)_ 100, '홍길동', "홍길동", true...
    - 콜스택 (Variable Environment)에 저장
 * 2.Reference DataType : 참조 데이터 타입
    - object literal({}), class, array([])...
    ex) let obj = {name:'홍길동',....} 
        let arr = [1, 2, 3 ...]
        let aeeObj = [{..}, {..}, {..}]

  ** Array(배열) **
  개념 : 동일한 데이터 타입의 요소를 여러개 저장하는 공간 
       : 인덱스 주소를 통해 요소를 저장하고 관리
       : 인덱스 주소는 0부터 
  생성 방법            
    - let array1 = new Array(10); // 10:크기 지정
    - let array2 = [1, 2, 3, 4];  // 크기와 요소가 같이 초기화
    - let array3 = ['1', '2', '3'];
    - let array4 = [{name:'홍길동'}, {nmae:'김철수'},...];
    - let obj1= {key:value, key:value}; //힙에 각각 생성
    - let obj2= {key:value, key:value}; //힙에 각각 생성
    - let array5 = [obj1, obj2];        //배열에는 obj1,2d의 주소만 들어감
    - array1, array2, array3, array4 에는 주소값만 들어간다      
  주의 사항 !!
    - 배열의 생성은 값이 정해져있으면 => [] 사용,
    - 값은 모르고 데이터의 크기만 저장할때는 new 키워드 사용    
    - CRUD 작업은 Array의 메소드를 사용 권장
    - for문, forEach를 사용하여 데이터를 가져옴
    - 배열의 인덱스는 전체 크기보다 1작음!!
*/

// 배열 생성
let array1 = new Array(2);  // 크기가 2인 배열 생성(크기만 할당)
console.log(array1.length);
console.log(array1[0]);     // undifined로 값들 초기화
console.log(typeof array1); // object형태 

let array2 = new Array(1,2,3); // 아래와 동일, 크기할당 및 데이터 초기화
// let array2 = new Array( [1,2,3] );
console.log(array2[0]);     // 1

let array3 = ['🍎','🍓','🍋','🍏'];
console.log(array3[array3.length-1]);  // 배열의 마지막 요소 출력

let obj1 = {name:'홍길동', age: 20};
let obj2 = {name:'김철수', age: 25};
let objList = [obj1, obj2];
console.log(objList); 
console.log(objList[0].name);  // 홍길동 출력
console.log(objList[1].name);  // 김철수 출력



