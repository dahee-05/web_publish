// 객체에서 기능을 실행하는 메소드
//
console.clear();

const apple = {
            name: '사과',
            color: 'red',
            emoji: '🍎',
            display : function() {console.log('🍎')}, //메소드,이름없는 함수
            getName : function() {console.log(this.name)}, // 재귀변수 : this
            getColor : function() {console.log(this.color)},
            getEmoji : function() {console.log(this.emoji)}
            }
// 콜스택에서 찾을때 this를 붙이지 않으면 변수 name을 찾기 때문에 에러 발생 **

// console.log(apple);
// console.log(apple.name);
// console.log(apple.color);
apple.getName();
apple.display();
apple.getColor();
apple.getEmoji();
