// E 동물원에서 동물관리 프로그램 생성
// 흰색사자, 회색사자, 흰색 호랑이, 회색호랑이, 푸들, 말티즈
// 객체 모델링 ==> Lion, Tiger, Dog 클래스 

// Lion 클래스
// 속성 : name, color, emoji, taste(식성)
// 메소드 : display(이모지), sleep, eat

// Lion, Tiger, Dog 클래스를 모델링하여 부모 클래스 생성 ==> Animal class
// Animal 클래스 속성 : name, color, emoji, taste
// Animal 클래스 메소드 : display(이모지), sleep, eat

console.clear();

class Animal {
  constructor(name, color, emoji, taste){
    this.name = name;
    this.color = color;
    this.emoji = emoji;
    this.taste = taste;
  }
  display = () => console.log(`${this.name},${this.emoji}`);
  sleep = () => console.log(`${this.name}가 잔다`);
  eat = () => console.log(`${this.emoji}가 먹는다`);
}

class Lion extends Animal{ 
  constructor(name, color, emoji, taste){
    super(name, color, emoji, taste);
  }
}

class Tiger extends Animal{ 
  constructor(name, color, emoji, taste, age){
    super(name, color, emoji, taste);
    this.age =age;
  }
  getAge = () => console.log(this.age);
}

class Dog extends Animal { 
  constructor(name, color, emoji, taste, type){
    super(name, color, emoji, taste);
    this.type = type;
  }
  getType = () => console.log(this.type);
}

const tom = new Lion('tom','white','🦁','meat');
const smith = new Tiger('smith','gray','🐯','meat', 3);
const judy = new Dog('judy','white','🐶','meat', '푸들');

tom.display(); tom.sleep(); tom.eat();
smith.display(); smith.sleep(); smith.eat(); smith.getAge();
judy.display(); judy.sleep(); judy.eat(); judy.getType();


/*
 * 동물원에서 동물을 관리하는 클래스
 * 속성 : #type, 동물의 객체(Lion, Tiger, Dog)
 * 메소드 : setter/getter
 */
console.clear();

class EverZoo {
  static LION = 1; //대문자로 정의 === 상수 ===const로 정의가능
  static TIGER = 1;
  static DOG = 1;
  #type;
  #animal;
  constructor(type, animal){
    this.#type = type;
    this.#animal = animal;
  }
  get type() {return this.#type};
  get animal() {return this.#animal}; 

  set type(type) {this.#type = type};
  set animal(animal) {this.#animal = animal};
}

const everZoo = new EverZoo(EverZoo.LION, tom);
console.log(everZoo.type, everZoo.animal);
