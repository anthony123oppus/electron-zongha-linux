import { app, BrowserWindow } from "electron";
import { handleCloseEvents, ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import { getIconPath, getPreloadPath, getUIPath } from "./pathResolver.js";
import { createTray } from "./tray.js";
import { createMenu } from "./menu.js";
import { IpcRequestHandler } from "./api/ipcRequestHandler.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // frame : false,
    show : false,
    icon: getIconPath(),
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  mainWindow.maximize();

  if (isDev()) {
    mainWindow.loadURL("http://localhost:5123");
    // mainWindow.webContents.openDevTools(); // This code will automatically open devtools when development mode
  } else {
    mainWindow.loadFile(getUIPath());
  }

  // THIS WILL GET THE COMPUTER RESOURCES
  PollResources(mainWindow);

  ipcMainHandle("getStaticData", () => {
    return getStaticData();
  });

  mainWindow.once("ready-to-show", () => {
    mainWindow.show()
  })

  // Separate all Request Handler
  IpcRequestHandler()

  // Create a Tray Icon and context menu in Notification Panel
  createTray(mainWindow);

  // Create a Custom menu in your application
  createMenu(mainWindow);

  // Handle when to close and hide the application
  handleCloseEvents(mainWindow);
});

