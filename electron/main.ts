import { app, BrowserWindow, ipcMain, IpcMainEvent } from "electron"
import path from "path"

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "./preload.js"),
    },
  })

  win.loadURL("http://localhost:5173")
}

app.whenReady().then(() => {
  createWindow()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit()
})

ipcMain.on("message", (event: IpcMainEvent, message: any) => {
  console.log(message)
  setTimeout(() => event.sender.send("message", "hi from electron"), 500)
})
