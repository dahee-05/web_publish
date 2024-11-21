// 객체 생성자 함수 : 메모리에 올려주는 함수 
// apple : property - name, color : method - display()
// orange : property - name, color : method - display()
// lemon : property - name, color : method - display()
 
console.clear();
//변수를 생성할때 this를 선언해야 콜스택에서 fruit안에 생성됨
// this 없을 경우 콜스택의 일반 변수로 인식됨
// 생성자 함수는 첫글자 대문자이고 위에 field와 method가 존재
function Fruit(name, color, emoji) {
      // field
      this.name = name;  
      this.color = color;
      this.emoji = emoji;
      // method
      // this.display = function(){console.log(this.emoji);
      this.display = () => {console.log(this.emoji)};
}

const apple = new Fruit('apple', 'red', '🍎');
const orange = new Fruit('orange', 'coral', '🍊');
const lemon = new Fruit('lemon', 'yellow', '🍋');

console.log(apple);
console.log(orange);
console.log(lemon);



// const apple = {
//     name : 'apple',
//     coloe : 'red',
//     display: function() {console.log('🍎');
//     }
// }

// const orange = {
//     name : 'orange',
//     coloe : 'orange',
//     display: function() {console.log('🍊');
//     }
// }

// const lemon = {
//     name : 'lemon',
//     coloe : 'yello',
//     display: function() {console.log('🍋');
//     }
// }