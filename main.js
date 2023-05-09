const startBtn = document.querySelector('.start-btn');
const hTime = document.querySelector('.hrs');

startBtn.addEventListener('click', (e) => {
  e.target.textContent = 'PAUSE';
});
