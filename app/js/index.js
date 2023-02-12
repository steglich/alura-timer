const abount = document.getElementById('link-abount');
const buttomPlay = document.querySelector('.buttom-play');
const timer = require('./timer');

let imgs = ['img/play-button.svg', 'img/stop-button.svg'];

abount.addEventListener('click', () => {
  window.electronAPI.openWindowAbount('Open window abount');
});

buttomPlay.addEventListener('click', () => {
  timer.play();
  imgs = imgs.reverse();
  buttomPlay.src = imgs[0];
});