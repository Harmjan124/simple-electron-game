const ipc = require("electron").ipcRenderer;

console.log('renderer loaded');

ipc.on('engine', function (event, arg) {
    console.log('engine received');
});

ipc.send('getEngine');