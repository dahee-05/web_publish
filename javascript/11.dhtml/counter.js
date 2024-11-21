// counter 증가/감소 
function counter(flag) {
  let number = document.querySelector('#number').textContent;
  if(flag === 'increment'){
    if(number < 10)
    document.querySelector('#number').textContent = ++number;
  }else{
    if(number > 0)
    document.querySelector('#number').textContent = --number;
  }
}

// counter 증가
function increment(){
  // alert('증가');
  let number = document.querySelector('#number').textContent;
  if(number < 10)
    document.querySelector('#number').textContent = ++number;
};

// counter 감소
const decrement = () => {
  // alert('감소');
  let number = document.querySelector('#number').textContent;
  if(number > 0)
    document.querySelector('#number').textContent = --number;
}