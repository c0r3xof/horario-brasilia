const { app, BrowserWindow } = require('electron');

function criarJanela() {
  const win = new BrowserWindow({
    width: 300,
    height: 150,
    frame: false,       // tira a barra de título e bordas
    alwaysOnTop: true,  // janela sempre em cima
    resizable: true,    // você pode alterar
    webPreferences: {
      nodeIntegration: false
    }
  });

  win.loadFile('index.html');
  // opcional: win.setAlwaysOnTop(true, 'screen-saver');
}

app.whenReady().then(criarJanela);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
