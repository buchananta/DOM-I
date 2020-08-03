let tens = document.querySelector('#msTens');
let hundreds= document.querySelector('#msHundreds');
let seconds = document.querySelector('#secondOnes');
let tensSec = document.querySelector('#secondTens');
let lock = 'unlocked';
tens.next = hundreds;
hundreds.next = seconds;
seconds.next = tensSec;
function timer(event) {
  tens.textContent = hundreds.textContent = 0;
  seconds.textContent = tensSec.textContent = 0;
  document.querySelectorAll('.digit').forEach(x => x.style.color = 'black');
  let counting = setInterval(function() {
    incr(tens, 'next') 
  }, 10);

  function incr(digit, nextDigit) {
    if (digit.textContent == '-') {
      digit.textContent = 0;
    }
    if (nextDigit && digit.textContent == 9) {
      digit.textContent = 0;
      incr(digit[nextDigit], nextDigit);
    } else digit.textContent++;
    if (tensSec.textContent == 1) {
      clearInterval(counting);
      document.querySelectorAll('.digit').forEach(x => x.style.color = 'red');
      lock = 'unlocked';
    }
    return digit.textContent;
  }
  lock = 'locked';
  return console.log('timer started');
}
let btn = document.createElement('button');
btn.textContent = 'Start!';
btn.style.display = 'block';
document.querySelector('.digits').appendChild(btn);
btn.addEventListener('click', function(){
  console.log('clicked!');
  if (lock === 'unlocked') {
    timer();
  }
});