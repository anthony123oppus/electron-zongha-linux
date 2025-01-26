import { app, BrowserWindow } from "electron";
import { ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import { getAssetPath, getPreloadPath, getUIPath } from "./pathResolver.js";
import { createTray } from "./tray.js";
import { createMenu } from "./menu.js";
import path from "path";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // frame : false,
    icon: path.join(
      getAssetPath(),
      process.platform === "darwin" ? "trayIconTemplate.png" : "trayIcon.png"
    ),
    webPreferences: {
      preload: getPreloadPath(),
    },
  });

  mainWindow.maximize();

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

  // Create a Tray Icon and context menu in Notification Panel
  createTray(mainWindow);

  // Create a Custom menu in your application
  createMenu(mainWindow);

  // Handle when to close and hide the application
  handleCloseEvents(mainWindow);
});

/**
 * This function handle the closing if the app close ( x button in top) it only hiding
 *    but the app click (Exit -dropdown menu of FILE TAB) it will quit and close the app
 *
 * @param mainWindow
 */

function handleCloseEvents(mainWindow: BrowserWindow) {
  let willClose = false;

  mainWindow.on("close", (e) => {
    if (willClose) {
      return;
    }

    e.preventDefault();
    mainWindow.hide();
    if (app.dock) {
      app.dock.hide();
    }
  });

  app.on("before-quit", () => {
    willClose = true;
  });

  mainWindow.on("show", () => {
    willClose = false;
  });
}
