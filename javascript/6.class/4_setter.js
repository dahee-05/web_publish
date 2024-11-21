// private로 설정한 변수의 값을 변경하기 위해서는 메서드를 통해 수정이 가능한데 setter라는 것으로 수정이 가능하다.
// 클래스에서 정의되는 메서드로 , private(#)로 접근제어가 설정된 필드에 새로운 값을 입력하기 위한 메서드
// setterXXX(입력되는 값), getterXXX()

class Employee {
  #empno;
  constructor(empno, ename, dept){
    this.#empno = empno;
    this.ename = ename;
    this.dept = dept;
  }
  // 내부에서 접근가능하도록 setter,getter사용
  setEmpno = (empno) => this.#empno = empno;
  setEname = (ename) => this.ename = ename;
  setDept = (dept) => this.dept = dept;

  getEmpno = () => this.#empno; 
  getEname = () => this.ename; 
  getDept = () => this.dept; 

  info = () => {console.log(`${this.ename},${this.dept}`);}
  infoAll = () => {console.log(`${this.#empno}, ${this.ename},${this.dept}`);}
}

const hong = new Employee('1234', '홍길동', '개발1팀');
hong.info();
hong.infoAll();
hong.setEmpno('12345');
hong.setEname('홍홍');
hong.setDept('개발2팀');
hong.infoAll();

console.log(hong.getEmpno());
console.log(hong.getEname());
console.log(hong.getDept());

/*
1. Employee 클래스의 코드가 힙에 올라감
2. hong을 주소값 없이 > 실행 컨텍스트에 등록 / 베리어블 컨텍스트에도 등록
3. new Employee -> 힙에서 해당 Employee 찾고 매개변수,생성자 호출하여 Employee 객체 형태를 만들음 > 각 변수에 값을 넣음 진행 
**************
4. hong.info(); 힙에 등록만 되어있음 > 실행컨텍스트에 등록 > 베리어블에 갔더니 주소값 찾아서 힙의 Employee객체에서 값을 찾음
*/