import {Engine} from "./model/engine/Engine";

const ipc = require("electron").ipcRenderer;

console.log('renderer loaded');

ipc.on('engine',
    function (event: any, arg: Engine) {

    console.log('engine received');
});

ipc.send('getEngine');