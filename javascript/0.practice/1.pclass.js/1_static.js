// 생성자 함수로 클래스를 생성해서 클래스 안의 함수를 호출한다면 -> 해당 변수.함수명();으로 호출

class Animal {
  constructor(emoji, color){
    this.emoji = emoji;
    this.color = color;
  }
  display = () => console.log(this.emoji, this.color);
}

// const dog = new Animal('❤️','green');
// dog.display();
// ************************************************
console.clear();
// ************************************************


class Fruits {
  constructor(name, color, emoji){
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }
  static makeFruit = () => new Fruits('orange','coral','🍊');
  // display = () => console.log(`${this.name},${this.color},${this.emoji}`); 
  display(){
    return console.log(`${this.name},${this.color},${this.emoji}`); 
  }
}

let apple = new Fruits('apple','red','🍎');
apple.display(); //apple객체를 생성하지 않으면 호출이 불가능
let orange = Fruits.makeFruit();
console.log(orange);
//console.log(orange.display());
// orange.display();

// 화살표 함수로 선언된 메서드(인스턴스 속성)는 클래스의 프로토타입이 아닌 인스턴스 속성으로 각 인스턴스가 이 메서드의 복사본을 가지게 됨