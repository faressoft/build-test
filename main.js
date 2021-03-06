var {app, BrowserWindow} = require('electron');

var mainWindow;

function createWindow () {

  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadFile('index.html');

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    mainWindow = null;
  });

}

app.on('ready', createWindow);

app.on('window-all-closed', function () {

  if (process.platform !== 'darwin') {
    app.quit();
  }

});

app.on('activate', function () {

  if (mainWindow === null) {
    createWindow();
  }

});
