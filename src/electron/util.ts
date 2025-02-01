import { app, BrowserWindow, ipcMain, WebContents, WebFrameMain } from "electron";
import { pathToFileURL } from "url";
import { getUIPath } from "./pathResolver.js";
import { AxiosError } from "axios";

export function isDev(): boolean {
  return process.env.NODE_ENV === "development";
}

export function ipcMainHandle<Key extends keyof EventPayloadMapping>(
  key: Key,
  handler: () => EventPayloadMapping[Key]
) {
  ipcMain.handle(key, (event) => {
    if(event.senderFrame) {
      validateEventFrame(event.senderFrame);
      return handler();
    }
  });
}

export function ipcApiRequestHandler<Key extends keyof EventPayloadMapping, T, R>(
  key : Key,
  handler : (payload : T) => Promise< R | AxiosError>
) {
  ipcMain.handle(key, async (event, payload) => {
    if(event.senderFrame) {
      validateEventFrame(event.senderFrame)
      return handler(payload)
    }
  })
}

export function ipcWebContentsSend<Key extends keyof EventPayloadMapping>(
  key: Key,
  webContents: WebContents,
  payload: EventPayloadMapping[Key]
) {
  webContents.send(key, payload);
}

export function validateEventFrame(frame : WebFrameMain) {
  if (isDev() && new URL(frame.url).host === 'localhost:5123') {
    return;
  }

  if(!frame.url.startsWith(pathToFileURL(getUIPath()).toString())) {
    throw new Error(`Malicious Event : ${frame.url} : ${new URL(frame.url).host} : ${pathToFileURL(getUIPath()).toString()}`)
  }

  return;
}


/**
 * This function handle the closing if the app close using ( x button in top) it only hide
 *    but the app click (Exit - dropdown menu of FILE or app TAB) it will quit and close the app
 *
 * @param mainWindow
 */

export function handleCloseEvents(mainWindow: BrowserWindow) {
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
