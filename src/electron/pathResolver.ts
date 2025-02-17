import path from "path";
import { app } from "electron";
import { isDev } from "./util.js";

export function getPreloadPath() {
  return path.join(
    app.getAppPath(),
    isDev() ? "." : "..",
    "/dist-electron/preload.cjs"
  );
}

export function getSplachScreen() {
  return isDev()
    ? `file://${path.join(app.getAppPath(), "splashScreen", "splashScreen.html")}`
    : `file://${path.join(process.resourcesPath, "splashScreen", "splashScreen.html")}`;
}

export function getUIPath() {
  return path.join(app.getAppPath(), "/dist-react/index.html");
}

export function getIconPath() {
  return path.join(
    getAssetPath(),
    process.platform === "darwin" ? "trayIconTemplate.png" : "trayIcon.png"
  );
}

export function getAssetPath() {
  return path.join(app.getAppPath(), isDev() ? "." : "..", "/src/assets");
}
