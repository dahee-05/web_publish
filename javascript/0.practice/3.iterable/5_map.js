let fruitMap = new Map();

// 데이터 추가 
fruitMap.set('apple','🍎');
fruitMap.set('orange','🍊');
console.log(fruitMap.get('apple'));
console.log(fruitMap.get('orange'));

console.log(fruitMap.has('apple')); // true
console.log(fruitMap.has('lemon')); // false

if(fruitMap.has('orange')) fruitMap.delete('orange');
console.log(fruitMap);    // Map(1) { 'apple' => '🍎' }


let fmap = new Map([['a',1 ],['b',2]]);
console.log(fmap);
