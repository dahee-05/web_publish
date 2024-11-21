// object는 다양한 타입의 데이터들을 저장하는 방식
// object literal : {property(key) : value, property:value...}
// object literal : {};, 속성과 함께 묶을때
// 배열 : 동일한 데이터가 반복될때, 단순하게 묶어놓을때



let a= 10; // 기본적인 값이 들어가는것 오브젝트 리터럴
let b= [1,2,3];

// obj는 힙에 올라감 > 실행시 콜스택에 올라가고 힙의 주소를 넣음
// obj의 주소값은 못바꾸나 값(value)는 바꿀 수 있음

let obj = {
  name : '홍길동',
  age : 20
}

// 1. obj 데이터 출력
console.log(obj); 
console.log(obj.name, typeof obj.name); 
console.log(obj.name, typeof obj.age); 

// 2.name을 '김철수'로 변경
obj.name ='김철수';
obj.age =29;
console.log(obj); 

// 3.속성 추가
obj.hair = 'long';
obj['gender'] = 'women';
console.log(obj);

// 4.age 삭제 
delete obj.age;
delete obj['hair'];
console.log(obj);


