import { ipcApiRequestHandler } from "../util.js";
import { getApiRequest, postApiRequest } from "./api.js";

export function IpcRequestHandler() {
  // Handler of API GET REQUEST
  ipcApiRequestHandler<
    "apiGetRequest",
    GetAPIPayloadTypes,
    ElectronSuccessResponseTypes<unknown>
  >("apiGetRequest", async (payload: GetAPIPayloadTypes) => {
    return await getApiRequest(payload);
  });

  // Handler of POST GET REQUEST
  ipcApiRequestHandler<
    "apiPostRequest",
    PostApiRequestTypes<unknown>,
    ElectronSuccessResponseTypes<unknown>
  >("apiPostRequest", async (payload: PostApiRequestTypes<unknown>) => {
    return await postApiRequest(payload);
  });
}
