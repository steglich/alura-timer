const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  openWindowAbount: (data) => ipcRenderer.send('open-window-abount', data),
})