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
  inputHrs !== 0 ? (hrs.textContent = inputHrs) : (hrs.textContent = '00');
  inputMin !== 0 ? (min.textContent = inputMin) : (min.textContent = '00');
  inputSec !== 0 ? (sec.textContent = inputSec) : (sec.textContent = '00');
}

// reset버튼 눌렀을 때
function clickResetBtn() {
  resetBtn.addEventListener('click', (e) => {
    inputHrs = 0;
    inputMin = 0;
    inputSec = 0;
    displayTime();
  });
}

setTime();
clickResetBtn();
