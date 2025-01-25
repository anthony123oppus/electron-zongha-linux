import osUtils from "os-utils";
import os from "os";
import fs from "fs";
import { BrowserWindow } from "electron";
import { ipcWebContentsSend } from "./util.js";

// **TODO: NEED TO ADD TYPES IN RETURN VALUE**

const POLLING_INTERVAL = 2000;

export function PollResources(mainWindow: BrowserWindow) {
  setInterval(async () => {
    const cpuUsage = await getCpuUsage();
    const ramUsage = getRamUsage();
    const storageData = getStorageData();
    ipcWebContentsSend("statistics", mainWindow.webContents, {
      cpuUsage,
      ramUsage,
      storageUsage: storageData.usage,
    });
  }, POLLING_INTERVAL);
}

function getCpuUsage() : Promise<number> {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
}

function getRamUsage() {
  return 1 - osUtils.freememPercentage();
}

function getStorageData() {
  const stats = fs.statfsSync(process.platform === "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000),
    usage: 1 - free / total,
  };
}

export function getStaticData() : StaticData {
  const totalStorage = getStorageData().total;
  const cpuName = os.cpus()[0].model;
  const totalMemoryGB = Math.floor(osUtils.totalmem() / 1024);

  return {
    totalStorage,
    cpuName,
    totalMemoryGB,
  };
}
