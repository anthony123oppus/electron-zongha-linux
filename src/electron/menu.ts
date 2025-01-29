import { app, BrowserWindow, Menu, MenuItemConstructorOptions } from "electron";
import { ipcWebContentsSend } from "./util.js";

export function createMenu(mainWindow: BrowserWindow) {
  const menuTemplate: MenuItemConstructorOptions[] = [
    {
      label: "App",
      type: "submenu",
      submenu: [
        {
          label: "System Information",
          click: () => {
            // Send IPC message to renderer to navigate to Manager Dashboard
            ipcWebContentsSend(
              "systemView",
              mainWindow.webContents,
              "resource"
            );
          },
        },
        {
          type: "separator",
        },
        {
          label: "Exit",
          click: app.quit,
        },
      ],
    },
    {
      label: "View",
      type: "submenu",
      submenu: [
        {
          label: "Devtool",
          id: "devtool",
          type: "checkbox",
          // visible: isDev(),
          click: (menuItem) => {
            if (menuItem.checked) {
              mainWindow.webContents.openDevTools();
            } else {
              mainWindow.webContents.closeDevTools();
            }
          },
        },
      ],
    },
  ];

  // Set the application menu
  const menu = Menu.buildFromTemplate(menuTemplate);
  Menu.setApplicationMenu(menu);

  // Update the "Devtool" checkbox dynamically when DevTools state changes
  mainWindow.webContents.on("devtools-opened", () => {
    const devToolsMenu = menu.getMenuItemById("devtool");
    if (devToolsMenu) {
      devToolsMenu.checked = true;
    }
  });

  mainWindow.webContents.on("devtools-closed", () => {
    const devToolsMenu = menu.getMenuItemById("devtool");
    if (devToolsMenu) {
      devToolsMenu.checked = false;
    }
  });
}
