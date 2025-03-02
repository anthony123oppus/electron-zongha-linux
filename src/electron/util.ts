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

export function ipcMainOn<Key extends keyof EventPayloadMapping>(
  key : Key,
  handler : (payload: EventPayloadMapping[Key]) => void
) {
  ipcMain.on(key, (event, payload) => {
    if(event.senderFrame){
      validateEventFrame(event.senderFrame);
      return handler(payload)
    }
  })
}

export function ipcApiRequestHandler<Key extends keyof EventPayloadMapping, T, R>(
  key : Key,
  handler : (payload : T) => Promise< R | AxiosError>
) {
  ipcMain.handle(key, async (event, payload) => {
    if(event.senderFrame) {
      try {
          const response = await handler(payload);
          
          return response;
      } catch (error) {
        let serializableError : ElectronErrorResponseTypes;

        if (isElectronErrorResponse(error)) {
          // If the error is already a CustomError, use it directly
          serializableError = error;
        } else if (error instanceof Error) {
          // If the error is a standard Error object, convert it to a CustomError
          serializableError = {
            name: "ApiError",
            message: error.message,
            status: 500,
            statusText: "Internal Server Error",
            data: null,
            success: false,
          };
        } else {
          // Handle unknown error types
          serializableError = {
            name: "UnknownError",
            message: "An unexpected error occurred",
            status: 500,
            statusText: "Internal Server Error",
            data: null,
            success: false,
          };
        }

        return serializableError;
      }
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


function isElectronErrorResponse (error : unknown) : error is ElectronErrorResponseTypes  {
  return (
    typeof error === "object" &&
    error !== null &&
    "name" in error &&
    "message" in error &&
    "success" in error
  )
}
