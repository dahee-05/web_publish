// 학생 클래스 
// 속성 : #이름 #나이 #주소 #별칭 
// 메소드 : setter, getter 메소드 정의 


class Student {
  #name
  #age
  #address
constructor(name, age, address, nickName){
  this.#name = name;
  this.#age = age;
  this.#address = address;
  this.nickName = nickName;
}

/*      자바방식으로 쓴 것 
  getName = () => this.#name;
  getAge = () => this.#age;
  getAddress = () => this.#address;
  getnickName = () => this.nickName;
  setName = (name) =>  this.#name = name;
  setAge = (age) => this.#age = age;
  setAddress = (address) => this.#address = address;
  setnickName = (nickName) => this.nickName = nickName; */

  // ecma 방식으로 작성된 것
  // set/get 함수 형식은 private 정의되 필드 값에 한해서 생성한다.
  get name() {return this.#name;}; //이건 화살표함수로 쓰면 문법적 오류 발생
  get age() {return this.#age;}; 
  get address() {return this.#address;}; 
  // get nickname() {return this.nickname;};  //deprecated

  set name(name) {this.#name = name;}
  set age(age) {this.#age = age;}
  set address(address) {this.#address = address;}
  // set nickName(nickName) {this.nickName = nickName;} //deprecated
}

const hong = new Student ('홍길동','30', '서울시','홍홍')
hong.name = '홍길순';
//ecma 출력
console.log(`${hong.name}\n${hong.age}\n${hong.address}\n${hong.nickName}`);



// \t   : 띄어쓰기,    \n   :  엔터키, 다음줄