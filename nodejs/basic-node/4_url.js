const url = require('url');
const {URL} = url;          // 구조분해할당
const myUrl = new URL('https://github.com/dahee-05');

// console.log('url ===>' ,url);
console.log('URL ===>' ,URL);
console.log('new Url', myUrl);
console.log('url.format()', url.format(myUrl));
