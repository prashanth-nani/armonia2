const path = require('path');
const {app, BrowserWindow} = require('electron');

let mainWindow = null;
console.log(process.env);

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