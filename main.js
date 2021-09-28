const {app,BrowserWindow, ipcMain} = require('electron')
app.on('ready',()=>{
    const win = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation:false
        },
        frame:false,
        fullscreen:true,
        resizable:false,
        icon:'favicon.ico'
    })
    win.loadFile('index.html')
    //?Start
    ipcMain.on('CloseChannel',()=>{
        app.quit()
    })
    ipcMain.on('MinChannel',()=>{
        win.minimize()
    })
    //!End
})