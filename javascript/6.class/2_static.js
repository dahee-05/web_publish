// static 메소드 : 객체를 생성하지 않고, 클래스명.메소드 형식으로 호출이 가능
class Fruit {
  static MAX_SIZE = 100; //변하지 않는 상수값은 static영역에 저장

  constructor(name, color, emoji){  // constructor(생성자) 함수 
    // field
    this.name = name;
    this.color = color;
    this.emoji = emoji;
  }
  // 정적 메서드, 객체 생성하지 않아도 클래스에서 호출가능
  static makeFruit = () => {
    // 콜스택에 생성됨,,,, 이미 힙에 new Fruit가 정의 되어있음
    return new Fruit('orange', 'coral', '🍊');  
  }
  display = () => console.log(`${this.name}, ${this.color}, ${this.emoji}`);
}

let apple = new Fruit('apple', 'red', '🍎');
apple.display();  // apple 객체를 생성하지 않으면 호출이 불가능
let orange = Fruit.makeFruit(); //주소값가져옴 ,객체 생성하지 않아도 클래스에서 호출가능
console.log(orange);  
orange.display();

console.log(Fruit.MAX_SIZE);



// apple.display();  apple로 메모리에 올라가기 때문에 '인스턴스 메서드'라고 한다.
// apple.makeFruit(); //저장되는 공간이 Fruit.makeFruit()와 다르다

// 함수처럼 코드를 자바스크립트가 class를 한번 읽는다.
// 힙에 저장할때 static이 붙은 애들은 따로 빼서 friut
// static메소드들은 static을 저장해놓은 영역이 따로 있다. 
// >> 따로 불러서 사용가능, class.메소드 실행하면 static영역에서 해당 메소드를 찾음 
// static이 담겨있는 클래스 이름으로만 실행이 된다.
// 고정된 값을 객체를 생성하지 않고도 사용할때 static 메서드를 사용한다.
// -> 그럼 객체 생성을 하지 않음으로서 메모리 효율성이 높아지나??


// 객체 생성 방법 1.new Fruit() 2.Fruit.makeFruit();