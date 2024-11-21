// class의 field는 생성자 함수에서 정의하는 값
// field에 접근 제어(Access control)를 정의 : private(#), public()
// private(#) - 현재 클래스에서만 접근 가능
// public() - 다른 클래스에서 접근 가능 
console.clear();

class Fruit {
  // 인스턴스.name형식으로 외부에서 호출하는 경우 데이터 숨김, display만 접근 가능
  #name; 
  constructor(name, color, emoji){
    // fields - public
    this.#name = name;
    this.color = color;
    this.emoji = emoji;
  }
  // 인스턴스 메서드
  display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}
const apple = new Fruit('apple' ,'green', '🍏');
apple.display();          // apple, green, 🍏
console.log(apple.name);  // private(#) -> undefined
console.log(apple.color); 
console.log(apple.emoji); 

console.clear();
// 사번(#), 사원명, 부서명
// info() 메서드 호출시 모든 정보 출력
class Employee{
  #empno;
  constructor(empno, ename, dept){
    this.#empno = empno;
    this.ename = ename;
    this.dept = dept;
  }
  info = () => {console.log(`${this.empno}, ${this.ename}, ${this.dept}`);}
  infoAll = () => {console.log(`${this.#empno}, ${this.ename}, ${this.dept}`);}
}

const emp = new Employee('1112','김다희','경영');
emp.info();     // 일반정보 사원명, 부서명 출력
emp.infoAll();  // 모든 정보 출력
console.log(emp.empno);
console.log(emp.ename);
console.log(emp.dept);


