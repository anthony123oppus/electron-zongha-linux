import { app, BrowserWindow } from "electron";
import { ipcApiRequestHandler, ipcMainHandle, isDev } from "./util.js";
import { getStaticData, PollResources } from "./resourceManager.js";
import { getIconPath, getPreloadPath, getUIPath } from "./pathResolver.js";
import { createTray } from "./tray.js";
import { createMenu } from "./menu.js";
import { getApiRequest, postApiRequest } from "./api/api.js";

app.on("ready", () => {
  const mainWindow = new BrowserWindow({
    // frame : false,
    icon: getIconPath(),
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ipcApiRequestHandler("apiGetRequest", async (payload: any) => {
    return await getApiRequest(payload);
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ipcApiRequestHandler("apiPostRequest", async (payload: any) => {
    return await postApiRequest(payload);
  });

  // Create a Tray Icon and context menu in Notification Panel
  createTray(mainWindow);

  // Create a Custom menu in your application
  createMenu(mainWindow);

  // Handle when to close and hide the application
  handleCloseEvents(mainWindow);
});

// function sampleapireq({name : string}) {
//   try {

//   } catch (error) {

//   }
// }

/**
 * This function handle the closing if the app close using ( x button in top) it only hide
 *    but the app click (Exit - dropdown menu of FILE or app TAB) it will quit and close the app
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
