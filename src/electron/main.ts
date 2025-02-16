import { app, BrowserWindow, ipcMain } from "electron";
import { handleCloseEvents, ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import {
  getIconPath,
  getPreloadPath,
  getSplachScreen,
  getUIPath,
} from "./pathResolver.js";
import { createTray } from "./tray.js";
import { createMenu } from "./menu.js";
import { IpcRequestHandler } from "./api/ipcRequestHandler.js";

app.whenReady().then(() => {
  // Create splash screen
  const splashScreen = new BrowserWindow({
    width: 400,
    height: 300,
    frame: false,
    alwaysOnTop: true,
    transparent: true,
    resizable: false,
    fullscreen: true,
    show: true,
    icon: getIconPath(),
  });

  // LOAD THE SPLASH SCREEN
  splashScreen.loadURL(getSplachScreen());

  const mainWindow = new BrowserWindow({
    frame: false,
    show: false,
    fullscreen: true,
    icon: getIconPath(),
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
    mainWindow.webContents.openDevTools(); // This code will automatically open devtools when development mode
  } else {
    mainWindow.loadFile(getUIPath());
  }

  // THIS WILL GET THE COMPUTER RESOURCES
  PollResources(mainWindow);

  ipcMainHandle("getStaticData", () => {
    return getStaticData();
  });

  ipcMain.on("react-ready", () => {
    // Check if splashScreen still exists before closing it
    if (splashScreen && !splashScreen.isDestroyed()) {
      splashScreen.close();
    }
    mainWindow.show();
  });

  // Separate all Request Handler
  IpcRequestHandler();

  // Create a Tray Icon and context menu in Notification Panel
  createTray(mainWindow);

  // Create a Custom menu in your application
  createMenu(mainWindow);

  // Handle when to close and hide the application
  handleCloseEvents(mainWindow);
});
