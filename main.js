const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');
const hrs = document.querySelector('.hrs');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

// 시간이 입력됐는지 감지
let isTimeInput = false;

let inputHrs = 0;
let inputMin = 0;
let inputSec = 0;
let interval;

// 1. 시간/분/초를 입력했을 때
function setTime() {
  const timeSetting = (e) => {
    startBtn.classList.add('active');
    resetBtn.classList.add('active');
    isTimeInput = true;

    if (e.target.value === 'hrs') {
      parseInt(e.target.textContent) < 24 ? (inputHrs += 1) : (inputHrs = 0);
    } else if (e.target.value === 'min') {
      parseInt(e.target.textContent) < 60 ? (inputMin += 10) : (inputMin = 0);
    } else if (e.target.value === 'sec') {
      parseInt(e.target.textContent) < 60 ? (inputSec += 10) : (inputSec = 0);
    }
    displayTime();
  };

  hrs.addEventListener('click', timeSetting);
  min.addEventListener('click', timeSetting);
  sec.addEventListener('click', timeSetting);
}

// 디스플레이에 보여주는 함수
function displayTime() {
  inputHrs !== 0
    ? inputHrs > '9'
      ? (hrs.textContent = inputHrs)
      : (hrs.textContent = `0${inputHrs}`)
    : (hrs.textContent = '00');
  inputMin !== 0
    ? inputMin > '9'
      ? (min.textContent = inputMin)
      : (min.textContent = `0${inputMin}`)
    : (min.textContent = '00');
  inputSec !== 0
    ? inputSec > '9'
      ? (sec.textContent = inputSec)
      : (sec.textContent = `0${inputSec}`)
    : (sec.textContent = '00');
}

// 2.3. start 버튼 & pause 버튼을 눌렀을 때
function clickBtn() {
  startBtn.addEventListener('click', (e) => {
    if (isTimeInput) {
      e.target.classList.toggle('pause-btn');
      if (e.target.textContent !== 'PAUSE') {
        e.target.textContent = 'PAUSE';
        // 1초씩 감소하는 함수
        startTimer();
      } else {
        e.target.textContent = 'START';
        // 시간을 멈추는 함수
        stopTimer();
        // clearInterval(startTimer);
      }
    }
  });
}

// setInterval() 변수에 담아야 clearInterval()로 중지할 수 있음
function startTimer() {
  interval = setInterval(() => {
    if (inputHrs === 0 && inputMin === 0 && inputSec === 0) {
      stopTimer();
      changeStart();
      alert('TIME OVER');
    } else if (inputSec !== 0) {
      inputSec--;
    } else {
      inputSec = 59;
      if (inputMin !== 0) {
        inputMin--;
      } else {
        inputMin = 59;
        inputHrs !== 0 ? inputHrs-- : (inputHrs = 23);
      }
    }

    displayTime();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

// 6. reset버튼 눌렀을 때
function clickResetBtn() {
  resetBtn.addEventListener('click', (e) => {
    inputHrs = 0;
    inputMin = 0;
    inputSec = 0;
    displayTime();
    changeStart();
  });
}

function changeStart() {
  if (startBtn.textContent === 'PAUSE') {
    startBtn.classList.remove('pause-btn');
    startBtn.textContent = 'START';
  }
}

setTime();
clickBtn();
clickResetBtn();
