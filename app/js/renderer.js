const btn = document.getElementById('win');

btn.addEventListener('click', () => {
  window.electronAPI.openWindowAbount('Open window abount');
});