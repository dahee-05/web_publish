// const - 상수형태로 선언
// require() 내장객체는 NodeJS에서 제공하는 내장 모듈을 호출 === import
const os = require('os');

console.log(os.type());         // Windows_NT
console.log(os.hostname());     // DESKTOP-G3J41R5
console.log(os.homedir());      // C:\Users\dahee
console.log(os.cpus().length);  // 8
console.log(os.freemem());      // 5806706688
console.log(os.totalmem());      // 16837255168
