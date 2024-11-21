// 클래스간의 상속관계  --> 클래스 다이어그램
// E 동물원에서 동물관리 프로그램 생성
// 흰색사자, 회색사자, 흰색 호랑이, 회색호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스 

// Lion 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal class
// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display(이모지), sleep, eat

class Animal{
  constructor(name, color, emoji, taste){
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.taste = taste;
  }
  display = () => console.log(`${this.name}, ${this.emoji}`);
  sleep = () => console.log(`${this.name}가(이) 잔다`);
  eat = () => console.log(`${this.name}가(이) 먹는다`);
}

class Lion extends Animal{
  constructor(name, color, emoji, taste){
      super(name, color, emoji, taste);  //부모에게 넘겨줌, 항상 위치는 위에**
  }
 }

class Tiger extends Animal{
  constructor(name, color, emoji, taste, age){  // tiger로 받기 때문에 매개변수는 유지
    super(name, color, emoji, taste); 
    this.age = age;
  }
  getAge = () => console.log(this.age);
}

class Dog extends Animal{
  constructor(name, color, emoji, taste, type){
    super(name, color, emoji, taste); 
    this.type = type;
  }
  getType = () => console.log(this.type);
}

/*
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, 동물의 객체(Lion, Tiger, Dog)
 * 메소드 : setter/getter
 */
class EverZoo {
  static LION = 1;  // 대문자로 정의 == 상수 == const로 정의
  static TIGER = 2; // 객체를 생성하지 않아도 사용가능 - static
  static DONG = 3;
  #type;
  #animal;
  constructor(type, animal){
    this.#type = type;
    this.#animal = animal;
  }
  get type() { return this.#type; }
  get animal() { return this.#animal; }

  set type(type) { this.#type = type; }
  set animal(animal) { this.#animal = animal; }
}


// 클래스 생성 및 호출
const tom = new Lion('tom','white','🦁','meat');
const smith = new Tiger('smith','gray','🐯','meat', 3);
const judy = new Dog('judy','white','🐶','meat', '푸들');

tom.display();  tom.sleep();  tom.eat();
smith.display(); smith.sleep(); smith.eat(); smith.getAge(); 
judy.display(); judy.sleep(); judy.eat(); judy.getType();

const everZoo = new EverZoo(EverZoo.LION,tom);
console.log(everZoo.type, everZoo.animal);



// animal을 상속받으면 힙에 animal 부터 만들고 주소값을 힙에 만들어진 Lion이 레퍼렌스한다 ****
// lion은 또 animal과 다른 주소값을 가지게 되는데 const tom = new Lion()을 하게 되면 라이언의 주소값을 참조
// 라리언은 애니멀의 주소값 참조
// tom.name을 했을 경우 애니멀이 아닌 라이언의 name값을 참조한다. >> 자기 자신부터 찾는다
// 만약 name을 라이언에서 입력을 안했다면 라이언에서 찾고 animal에 가서 찾는다
// 프로그램 종료시 상속관계도 종료
// extends를 할때 animal이 생성되며 그전에 따로 힙에 생성되지 않는다
// lion - animal/ Tiger - animal/ Dog - animal 로 자식당 부모는 1개씩 힙에 만들어진다.
// 


