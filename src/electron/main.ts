import { app, BrowserWindow, Menu } from "electron";
import { ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import { getPreloadPath, getUIPath } from "./pathResolver.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    webPreferences : {
      preload : getPreloadPath(),
    }
  });

  mainWindow.maximize();
  // Hide the Menu (File, Edit, View, window, Help) Tab
  Menu.setApplicationMenu(null)

  // Print NODE_ENV in the console
  console.log("NODE_ENV in Main Process:", process.env.NODE_ENV);

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
});

