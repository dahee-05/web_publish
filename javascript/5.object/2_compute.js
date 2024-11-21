// PERSON 객체를 CRUD로 관리하는 함수를 정의
//  C(create),  R(read),    U(update),     D(delete)
// setValue(), getValue(), updateValue(), deleteValue() 

console.clear();

const person = {
        name : '홍길동',
        age: 20,
        job: '개발자'
};

const fruits = {
        name : '사과',
        emoji: '🍎',
};

// const 함수명 = (파라미터...) => {실행문;};
export const setValue = (object, newKey, value) => object[newKey] = value;

export const getValue = (object, key) => object[key];

export const updateValue = (object, key, newValue) => object[key] = newValue;

export const deleteValue = (object, key) => delete object[key];

setValue(person, 'address', '서울시');
setValue(fruits, 'color', 'red');
console.log(person);
console.log(fruits);

console.log(getValue(person, 'name'));
console.log(getValue(fruits, 'color'));

updateValue(person, 'name', '김철수');
updateValue(fruits, 'color', 'Green');

deleteValue(person, 'age');
deleteValue(fruits, 'name');

console.log(person);
console.log(fruits);