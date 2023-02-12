const btn = document.getElementById('close');
const versionElectron = document.getElementById('version-electron');
// const test = document.getElementById('test');
let versionsElectron = '';

window.electronAPI.versionElectron((event, data) => {
  versionsElectron = data;
})

window.onload = function() {
  console.log(versionsElectron);
  versionElectron.textContent = versionsElectron;
}

btn.addEventListener('click', () => {
  window.electronAPI.closeWindowAbount('Close window abount');
});

// test.addEventListener('click', () => {
//   shell.openExternal('https://www.electronjs.org/docs/latest/api/app#event-window-all-closed');
// });