import {EngineImpl} from "./model/engine/EngineImpl";
import {WorldImpl} from "./model/world/WorldImpl";

const { app, BrowserWindow } = require('electron');
const ipc = require('electron').ipcMain;


function createWindow () {
    // Create the browser window.
    let win = new BrowserWindow({ width: 800, height: 600, frame: false });

    win.toggleDevTools();
    let engine = new EngineImpl(new WorldImpl());

    ipc.on('getEngine', function (event:any, arg:any) {
        win.webContents.send('engine', engine);
    });

    // and load the index.html of the app.
    win.loadFile('index.html');


}

app.on('ready', createWindow);