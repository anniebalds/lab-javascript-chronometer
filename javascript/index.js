const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

let intervalId = null;

function printTime() {
  intervalId = setInterval (() => {
    printMinutes();
    printSeconds();
    }, 1000);
  }

function printMinutes() {
  const minutes = chronometer.computeTwoDigitNumber(chronometer.getMinutes())
  
  minDecElement.textContent = minutes[0]
  minUniElement.textContent = minutes[1]
}


function printSeconds() {
  const seconds = chronometer.computeTwoDigitNumber(chronometer.getSeconds())
   
  secDecElement.textContent = seconds[0]
  secUniElement.textContent = seconds[1]
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  const li = document.createElement('li');
  li.textContent = chronometer.split();
  splitsElement.appendChild(li)
}

function clearSplits() {
  splitsElement.innerHTML = ''
}

function setStopBtn() {
  btnLeftElement.innerHTML = 'STOP';
  btnRightElement.innerHTML = 'SPLIT'
}

function setSplitBtn() {
  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')

}

function setStartBtn() {
    btnLeftElement.innerHTML = 'START';
    btnRightElement.innerHTML = 'RESET'
  }


function setResetBtn() {
  btnRightElement.classList.toggle('reset')
  btnRightElement.classList.toggle('split')
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
    
  if (btnLeftElement.classList.contains('start')) { 
    btnLeftElement.classList.toggle('start')
    btnLeftElement.classList.toggle('stop')
    setStopBtn();
    setSplitBtn();
    chronometer.start();
    printTime()
  }
  else if (btnLeftElement.classList.contains('stop')) {
    btnLeftElement.classList.toggle('start')
    btnLeftElement.classList.toggle('stop')
    chronometer.stop();
    setStartBtn();
    setResetBtn()
  }
}
)
  

// Reset/Split Button
btnRightElement.addEventListener('click', () => {

  if (btnRightElement.classList.contains('split')){
    chronometer.split();
    printSplit()
  }

  if (btnRightElement.classList.contains('reset')){
    clearSplits();
    chronometer.stop();
    chronometer.reset();
  }
})
