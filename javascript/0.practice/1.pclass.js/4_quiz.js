// 학생 클래스 
// 속성 : #이름 #나이 #주소 #별칭 
// 메소드 : setter, getter 메소드 정의 

class Student {
  #name;
  #age;
  #address;
  constructor(name, age, address){
    this.#name = name ;
    this.#age = age;
    this.#address = address;
  }
  // getName = () => this.#name; 
  // getName = () => console.log(this.#name); // hong.getName();
    
  // setName = (name) => this.#name = name; 

  //이건 화살표함수로 쓰면 문법적 오류 발생
  get name() {return this.#name};
  get age() {return this.#age};
  get address() {return this.#address};

  set name(name) {this.#name = name;}
  set age(age) {this.#age = age};
  set address(address) {this.#address = address};
}

const hong = new Student('홍길동','20','서울');
// console.log(hong.getName());
// hong.setName('미스터 조');
hong.name = '미세스 이';
hong.age = 200;
console.log(hong.name);
console.log(hong.age);

// console.log(hong.getName());
