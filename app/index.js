const path = require('path');
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

var mainWindow = null;
app.on('ready', function(){
    mainWindow = new BrowserWindow();

    mainWindow.loadURL(path.join("file://", __dirname, "index.html"));

    mainWindow.on('closed', function(){
        mainWindow = null;
    });
});

app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});