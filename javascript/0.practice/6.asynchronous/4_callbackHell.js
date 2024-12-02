function step1(init, callback){
  let result = init + 1;
  callback(result);
}

function step2(init, callback){
  let result = init + 2;
  callback(result);
}

function step3(init, callback){
  let result = init + 3;
  callback(result);
}

step1(0, (result1) =>{
  console.log(`result ==> ${result1}`);     //1
  step2(result1, (result2) => {
    console.log(`result2 ==> ${result2}`);  // 3
    step3(result2, (result3) =>{
      console.log(`result3==> ${result3}`); // 6
    })
  })
});