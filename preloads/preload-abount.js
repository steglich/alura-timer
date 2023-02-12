const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('electronAPI', {
  closeWindowAbount: (data) => ipcRenderer.send('close-window-abount', data),
  versionElectron: (data) => ipcRenderer.on('version-electron', data),
})