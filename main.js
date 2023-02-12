const { app, BrowserWindow, ipcMain } = require('electron');
const { versions } = require('node:process');

const configMainWindow = {
  width: 696,
  height: 720,
  x: 1920,
  y: 0,
  webPreferences: {
    preload: `${__dirname}/preloads/preload-main.js`
  },
};
const configAbountWindow = {
  width: 300,
  height: 200,
  x: 2120,
  y: 200,
  alwaysOnTop: true,
  frame: false,
  webPreferences: {
    preload: `${__dirname}/preloads/preload-abount.js`
  },
};

let abountWindow = null;

function handleOpenWindowAbount(event, data) {
  if (!!abountWindow) return;
  console.log(data);
  abountWindow = new BrowserWindow(configAbountWindow);
  
  abountWindow.loadFile(`app/abount.html`);
  abountWindow.webContents.send('version-electron', versions.electron);
  abountWindow.show();

};

function handleCloseWindowAbount(event, data) {
  console.log(data);
  abountWindow.close();
  abountWindow = null;
};

function toListenEvents() {
  ipcMain.on('open-window-abount', handleOpenWindowAbount);
  ipcMain.on('close-window-abount', handleCloseWindowAbount);
}

function startWindow() {
  console.log('Aplicação iniciada!');
  const mainWindow = new BrowserWindow(configMainWindow);

  mainWindow.loadFile(`app/index.html`);
  mainWindow.on('close', () => {
    !!abountWindow && abountWindow.close();
  })
};

app.whenReady().then(() => {
  toListenEvents();
  startWindow();
});

app.on('window-all-closed', () => {
  console.log('window-all-close');
  app.quit();
});