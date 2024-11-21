// ************************************************
console.clear();
// ************************************************
class Fruit {
  #name; // 외부에서 호출하는 경우 데이터 숨김, display만 접근 가능
  constructor(name, color, emoji){
    this.#name = name;
    this.color = color;
    this.emoji = emoji;
  }
  // 인스턴스 메서드
  display = () => console.log(`${this.#name},${this.color},${this.emoji}`);
}
const apple = new Fruit('apple','red','🍎');
apple.display();
console.log(apple.emoji);

console.clear();
// 사번(#), 사원명, 부서명
// info() 메서드 호출시 모든 정보 출력
class Employee {
  #empno;
  constructor(empno, ename, dpt){
    this.#empno = empno;
    this.ename = ename;
    this.dpt =dpt;
  }
  info = () => console.log(`${this.empno},${this.ename},${this.dpt}`);
  infoAll = () => console.log(`${this.#empno},${this.ename},${this.dpt}`);
  // static메서드는 클래스 자체에서 호출> 인스턴스 생성하지 않아도 호출 가능
  // static 메서드는 인스턴스 속성이나 메서드에 접근할 수 없음
  static infoAll2 = (empno, ename, dpt) => console.log(`${empno},${ename},${dpt}`);
}
let info = new Employee('1234','홍길동','개발1팀');
let infoAll = new Employee('15','반숙','개발5팀');
info.info();
infoAll.infoAll();
console.log(info.ename);


Employee.infoAll2('00','홍홍홍','인사팀');
// let infoAll2 = Employee.infoAll2('00','홍홍홍','인사팀');
// console.log(infoAll2);




