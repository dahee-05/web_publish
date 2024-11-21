// 학사관리 프로그램을 생성하는 경우, 사용자를 정의하는 클래스를 설계
// 학생, 교수, 학부모, 직원 ==> Member부모 클래스(name, age, address)

console.clear();

class Member {
  #name; #age; #address;
  constructor(name, age, address){ // 자식클래스 생성자 함수에서 super메소드 호출시 실행
    this.#name = name;
    this.#age = age;
    this.#address = address;
  }
  get name()    { return this.#name; }
  get age()     { return this.#age;  }
  get address() { return this.#address; }
}

class Student extends Member{
  #sno;  // private로 만들어지면 해당 클래스에서 출력하도록
  constructor(name, age, address, sno){
    super(name, age, address);
    this.#sno = sno;
  }
  get sno() {return this.#sno;}
  // 전체 값을 반환하는 함수 정의, #을 주는건 다이렉트로 접속 > 부모클래스 접근을 위해 #생략
  // 객체명.values();
  // values = () => [this.name, this.age, this.address, this.#sno];
  // 객체명.values,,,, get: 리턴되는 값이기 때문에 사용
  get values() { return [this.name, this.age, this.address, this.#sno];}
}

class Professor extends Member{
  #subject;
  constructor(name, age, address, subject){
    super(name, age, address);
    this.#subject = subject;
  }
  get subject() {return this.#subject}
  // 객체명.values,,,, get: 리턴되는 값이기 때문에 사용
  get values() { return [this.name, this.age, this.address, this.#subject];}
}

class Parent extends Member {
  #cname; 
  constructor(name, age, address, cname){
    super(name, age, address);
    this.#cname = cname;
  }
  get cname() {return this.#cname;}
  // 객체명.values,,,, get: 리턴되는 값이기 때문에 사용
  get values() { return [this.name, this.age, this.address, this.#cname];}
}

class Employee extends Member {
  #department;
  constructor(name, age, address, department){
    super(name, age, address);
    this.#department = department ;
  }
  get department() {return this.#department;}
  // 객체명.values,,,, get: 리턴되는 값이기 때문에 사용
  get values() { return [this.name, this.age, this.address, this.#department];}
}

// signUp 버튼 클릭시 호출되는 함수
const signUpCheck = () => {
  let type = document.querySelector('input[type=radio]:checked');
  let name, age, address, sno, subject, cname, department;
  // let sno = document.querySelector('#sno').value;
  // let name = document.querySelector('#name').value;
  // let age = document.querySelector('#age').value;
  // let address = document.querySelector('#address').value;
  // let subject = document.querySelector('#subject').value;
  // let cname = document.querySelector('#cname').value;
  // let department = document.querySelector('#department').value;
  let member = null;  // type에 따라서 각각의 클래스 생성
  switch(type.value){
    case '1' :
        sno = document.querySelector('#student #sno').value;
        name = document.querySelector('#student #name').value;
        age = document.querySelector('#student #age').value;
        address = document.querySelector('#student #address').value;
        member = new Student(name, age, address, sno); break;
    case '2' : 
        name = document.querySelector('#professor #name').value;
        age = document.querySelector('#professor #age').value;
        address = document.querySelector('#professor #address').value;
        subject = document.querySelector('#professor #subject').value;
        member = new Professor(name, age, address, subject); break;
    case '3' :
        name = document.querySelector('#parent #name').value;
        age = document.querySelector('#parent #age').value;
        address = document.querySelector('#parent #address').value; 
        cname = document.querySelector('#parent #cname').value;
        member = new Parent(name, age, address, cname); break;
    case '4' : 
        name = document.querySelector('#employee #name').value;
        age = document.querySelector('#employee #age').value;
        address = document.querySelector('#employee #address').value;
        department = document.querySelector('#employee #department').value;
        member = new Employee(name, age, address, department); break;
    default : ;
  }
  console.log(member);
   // 동적html - 다이나믹 html : 자바스크립트로 생성되는 HTML
   // ['name', 'age', 'address', 'sno'], 클래스의 필드값이 private로 만들어서 데이터 못가져옴
   // private 데이터는 내부에서 줘야함
   let list = ``;
   let output = ``;
  
   member.values.forEach((items) => {
    list += `<li>${items}</li>`;
  });
   output = `<ul>${list}</ul>`; 
  document.querySelector('#result').innerHTML = output;

} // end of signUpCheck


// 라디오 버튼 함수클릭시 화면 전화
const display = (type) => {
  document.querySelector('#result').innerHTML = ''; // result값 초기화
  document.querySelector('#student').style.display = 'none';
  document.querySelector('#professor').style.display = 'none';
  document.querySelector('#parent').style.display = 'none';
  document.querySelector('#employee').style.display = 'none';

  if(type === '1'){
    document.querySelector('#student').style.display = 'block';
  }else if(type === '2'){
    document.querySelector('#professor').style.display = 'block';
  }else if(type === '3'){
    document.querySelector('#parent').style.display = 'block';
  }else{
    document.querySelector('#employee').style.display = 'block';
  }  
} // end of display










// const hong = new Student('홍길동', 20, '서울시', '1234');
// const smith = new Professor('smith', 40, '서울시 서초구', 'JavaScript');
// const hongP = new Parent('홍길수', 60, '서울시', '홍길동');
// const lee = new Employee('이철규', 30, '부산시 해운대구','개발1팀');

// console.log('*****************');
// console.log(`Student : ${hong.name}\t${hong.age}\t${hong.address}\t${hong.sno}`);
// console.log('*****************');
// console.log(`Professor : ${smith.name}\t${smith.age}\t${smith.address}\t${smith.subject}`);
// console.log('*****************');
// console.log(`Parent : ${hongP.name}\t${hongP.age}\t${hongP.address}\t${hongP.cname}`);
// console.log('*****************');
// console.log(`Employee : ${lee.name}\t${lee.age}\t${lee.address}\t${lee.department}`);

// const 