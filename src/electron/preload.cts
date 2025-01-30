const electron = require("electron");

// exposeInMainWorld funtion -- basically just append what we adding in window object
electron.contextBridge.exposeInMainWorld("electron", {
  subscribeStatistics: (callback) => {
    return ipcOn("statistics", (stats) => {
      callback(stats);
    });
  },
  subscribeSystemView: (callback) => {
    return ipcOn("systemView", (view) => {
      callback(view);
    });
  },
  getStaticData: () => ipcInvoke("getStaticData"),
  getApiRequest: <R,>(option: GetAPIPayloadTypes) => ipcGetApiInvoke<"apiGetRequest", R>("apiGetRequest", option),
  postApiRequest: <T,R>(option: PostApiRequestTypes<T>) =>
    ipcPostApiInvoke<"apiPostRequest", T,R>("apiPostRequest", option),
  putApiReqeust : <T, R>(option : PutApiRequestTypes<T>) => 
    ipcPutApiInvoke<"apiPutRequest", T, R>("apiPutRequest", option) 
} satisfies Window["electron"]);


// NORMAL INVOKE
function ipcInvoke<Key extends keyof EventPayloadMapping>(
  key: Key
): Promise<EventPayloadMapping[Key]> {
  return electron.ipcRenderer.invoke(key);
}

// GET API REQUEST INVOKE
function ipcGetApiInvoke<Key extends keyof EventPayloadMapping, R>(
  key: Key,
  option: GetAPIPayloadTypes
): Promise<ElectronSuccessResponseTypes<R>> {
  return electron.ipcRenderer.invoke(key, option);
}

// POST API REQUEST INVOKE
function ipcPostApiInvoke<Key extends keyof EventPayloadMapping, T, R>(
  key: Key,
  option: PostApiRequestTypes<T>
): Promise<ElectronSuccessResponseTypes<R>> {
  return electron.ipcRenderer.invoke(key, option);
}

// PUT API REQUEST INVOKE
function ipcPutApiInvoke<Key extends keyof EventPayloadMapping, T, R>(
  key : Key,
  option : PutApiRequestTypes<T>
) : Promise<ElectronSuccessResponseTypes<R>> {
  return electron.ipcRenderer.invoke(key, option);
}

function ipcOn<Key extends keyof EventPayloadMapping>(
  key: Key,
  callback: (payload: EventPayloadMapping[Key]) => void
) {
  const cb = (_: Electron.IpcRendererEvent, payload: any) => callback(payload);
  electron.ipcRenderer.on(key, cb);
  return () => electron.ipcRenderer.off(key, cb);
}

