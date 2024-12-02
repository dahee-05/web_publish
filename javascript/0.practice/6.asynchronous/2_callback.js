let promise1 = new Promise((resolve, reject) => { 
  // setTimeout(() => {resolve('javascript')}, 3000);
  setTimeout(() => {reject('fail')}, 3000);
});

promise1
  .then((resolve) => {console.log('3초 경과!')})
  .catch((reject) => {console.log(error)});