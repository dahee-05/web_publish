// 1. 'Hello~ JavaScript!!!' 문자열을 한 문자씩 출력해주세요
let str = 'Hello~ JavaScript!!!'; // str자체가 배열
for(let i =0; i<str.length; i++){
  console.log(str[i]);
}

// 2. '독서, 수영, 영화, 게임, 사이클'
let hobbyList = '독서, 수영, 영화, 게임, 사이클';
hobbyList = hobbyList.split(',');
for(let i=0; i< hobbyList.length; i++){
  console.log(hobbyList[i].trim());
}

hobbyList.forEach((hobby) => console.log(hobby.trim()));