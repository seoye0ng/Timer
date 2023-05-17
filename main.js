const startBtn = document.querySelector('.start-btn');
const resetBtn = document.querySelector('.reset-btn');

// 1. 시간/분/초를 입력했을 때
function setTime() {
  const hrs = document.querySelector('.hrs');
  const min = document.querySelector('.min');
  const sec = document.querySelector('.sec');

  const setHrs = (e) => {
    startBtn.classList.add('active');
    resetBtn.classList.add('active');

    let hrsNum = parseInt(e.target.textContent);
    if (hrsNum < 24) {
      hrsNum += 1;
      e.target.textContent = hrsNum;
    } else {
      e.target.textContent = '00';
    }
  };

  const setMinSec = (e) => {
    startBtn.classList.add('active');
    resetBtn.classList.add('active');

    let minSecNum = parseInt(e.target.textContent);
    if (minSecNum < 60) {
      minSecNum += 10;
      e.target.textContent = minSecNum;
    } else {
      e.target.textContent = '00';
    }
  };
  hrs.addEventListener('click', setHrs);
  min.addEventListener('click', setMinSec);
  sec.addEventListener('click', setMinSec);
}

// start 버튼을 눌렀을 때
startBtn.addEventListener('click', (e) => {
  e.target.textContent = 'PAUSE';
});

setTime();
