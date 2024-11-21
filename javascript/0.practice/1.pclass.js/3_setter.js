class Employee {
  #empno;
  constructor(empno, ename, dept){
    this.#empno = empno;
    this.ename = ename;
    this.dept = dept;
  }

  setEmpno = (empno) => this.#empno = empno;
  setEname = (ename) => this.ename = ename;
  setDept = (dept) => this.dept = dept; 

  getEmpno = () => this.#empno;
  getEnamae = () => this.ename;
  getDept = () => this.dept;

  info = () => console.log(`${this.empno},${this.ename}, ${this.dept}`);
  infoAll = () => console.log(`${this.#empno},${this.ename}, ${this.dept}`);
  
}

const hong = new Employee('1234','홍길동','경영');
hong.info();
hong.infoAll();
console.log(hong.getEmpno()); // private(#)를 클래스 밖에서도 출력가능 
console.log(hong.getDept());

hong.setEmpno('111');
hong.setEname('나지렁');
hong.setDept('개발어쩔');
hong.infoAll();
// console.log(hong.infoAll()); //console.log()를 위에서도 사용하여 2번 사용되므로 위의 console.log()는 undefined가 출력
