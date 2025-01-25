import { app, BrowserWindow, Menu, Tray } from "electron";
import { ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import { getAssetPath, getPreloadPath, getUIPath } from "./pathResolver.js";
import path from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences : {
      preload : getPreloadPath(),
    }
  });

  mainWindow.maximize();
  // Hide the Menu (File, Edit, View, window, Help) Tab
  Menu.setApplicationMenu(null)

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
    mainWindow.webContents.openDevTools();
  } else {
    mainWindow.loadFile(getUIPath());
  }

  // THIS WILL GET THE COMPUTER RESOURCES
  PollResources(mainWindow)

  ipcMainHandle("getStaticData", () => {
    return getStaticData();
  })

  console.log(path.join(getAssetPath(), 'trayIcon.png'))

  new Tray(path.join(getAssetPath(), 'trayIcon.png'))
});

