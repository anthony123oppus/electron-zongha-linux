import { app, BrowserWindow, Menu, Tray } from "electron";
import { getAssetPath } from "./pathResolver.js";
import path from "path";
import { ipcWebContentsSend } from "./util.js";

// THIS CODE WILL APPLY THE NOTIFICATION ICON
export function createTray(mainWindow: BrowserWindow) {
  const tray = new Tray(
    path.join(
      getAssetPath(),
      process.platform === "darwin" ? "trayIconTemplate.png" : "trayIcon.png"
    )
  );

  tray.setContextMenu(
    Menu.buildFromTemplate([
      {
        label: "System Information",
        click: () => {
          mainWindow.show();
          if (app.dock) {
            app.dock.show();
          }
          ipcWebContentsSend("systemView", mainWindow.webContents, "resource");
        },
      },
      {
        label: "Show",
        click: () => {
          mainWindow.show();
          if (app.dock) {
            app.dock.show();
          }
        },
      },
      {
        label: "Quit",
        click: () => app.quit(),
      },
    ])
  );

  // Tooltip label when hover the application icon in notification panel
  tray.setToolTip("ZongHa Kiosk");
}
