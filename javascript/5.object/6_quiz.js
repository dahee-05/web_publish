// 객체 생성자 함수 - 객체 모델링(공통 속성을 뽑아냄 / 반려동물, 동물병원.. )
// dog, cat, rabbit... 의 객체 생성자 함수를 정의하고, 호출해 보세요.
// 속성(Atrribute, propeerty) -> 구현되면 field : name, color
// 메소드(Method) : display, eat('🐕 먹는다'), sleep('🐕 잔다')
console.clear();

function Animals(emoji, color ){
    this.emoji = emoji;
    this.color = color;
    this.display = () => { console.log(this.emoji)};
    this.eat = () => { console.log(`${this.emoji} 먹는다`)};
    this.sleep = () => { console.log(`${this.emoji} 잔다`)};
}; 

const dog = new Animals('🐕', 'brown');     // 힙에 생성
const cat = new Animals('🐈‍⬛', 'black' );    // 힙에 생성
const rabbit = new Animals('🐇', 'white' ); // 힙에 생성

dog.display();
dog.eat();
dog.sleep();

cat.display();
cat.eat();
cat.sleep();

rabbit.display();
rabbit.eat();
rabbit.sleep();

// console.log(cat);
// console.log(rabbit);