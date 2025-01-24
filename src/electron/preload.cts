const electron = require("electron");

// exposeInMainWorld funtion -- basically just append what we adding in window object
electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    ipcOn("statistics", (stats) => {
      callback(stats);
    });
  },
  getStaticData: () => ipcInvoke("getStaticData"),
} satisfies Window["electron"]);

function ipcInvoke<Key extends keyof EventPayloadMapping>(
  key: Key
): Promise<EventPayloadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}

function ipcOn<Key extends keyof EventPayloadMapping>(
  key: Key,
  callback: (payload: EventPayloadMapping[Key]) => void
) {
  electron.ipcRenderer.on(key, (_, payload) => callback(payload));
}



/**
 * OLD CODE
 */
// electron.contextBridge.exposeInMainWorld("electron", {
//   subscribeStatistics: (callback: (statistics: any) => void) => {
//     electron.ipcRenderer.on("statistics", (_, stats) => {
//       callback(stats);
//     })
//   },
//   getStaticData: () => electron.ipcRenderer.invoke("getStaticData"),
// } satisfies Window["electron"]);
