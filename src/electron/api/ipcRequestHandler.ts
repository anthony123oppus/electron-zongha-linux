import { ipcApiRequestHandler } from "../util.js";
import { deleteApiRequest, getApiRequest, patchApiRequest, postApiRequest, putApiRequest } from "./api.js";

export function IpcRequestHandler() {
  // Handler of API GET REQUEST
  ipcApiRequestHandler<
    "apiGetRequest",
    GetAPIPayloadTypes,
    ElectronSuccessResponseTypes<unknown>
  >("apiGetRequest", async (payload: GetAPIPayloadTypes) => {
    return await getApiRequest(payload);
  });

  // Handler of API GET REQUEST
  ipcApiRequestHandler<
    "apiPostRequest",
    PostApiRequestTypes<unknown>,
    ElectronSuccessResponseTypes<unknown>
  >("apiPostRequest", async (payload: PostApiRequestTypes<unknown>) => {
    return await postApiRequest(payload);
  });

  // Handler of API PUT REQUEST
  ipcApiRequestHandler<
    "apiPutRequest",
    PutApiRequestTypes<unknown>,
    ElectronSuccessResponseTypes<unknown>
  >("apiPutRequest", async (payload : PutApiRequestTypes<unknown>) => {
    return await putApiRequest(payload);
  })

  // Handler of API DELETE REQEUST
  ipcApiRequestHandler<
    "apiDeleteRequest",
    DeleteApiRequestTypes,
    ElectronSuccessResponseTypes<unknown>
  >("apiDeleteRequest", async (payload : DeleteApiRequestTypes) => {
    return await deleteApiRequest(payload);
  })

  // Handler of API PATCH REQUEST
  ipcApiRequestHandler<
    "apiPatchRequest",
    PatchApiRequestTypes<unknown>,
    ElectronSuccessResponseTypes<unknown>
  >("apiPatchRequest", async (payload : PatchApiRequestTypes<unknown>) => {
    return await patchApiRequest(payload);
  })
}
