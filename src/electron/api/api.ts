import axios, { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "./axiosInstance.js";

interface ElectronResponseTypes {
  data : AxiosResponse["data"];
  status : number;
  statusText : string
}

// GET API REQUEST HANDLER
export async function getApiRequest(payload: GetAPIPayloadTypes):Promise<ElectronResponseTypes | AxiosError> {
  const { url, headers } = payload;

  // HANDLE EITHER HAVE HEADER OR NULL
  const config = {
    headers: headers || {},
  };

  //TRY CATCH CODE 
  try {
    const response = await axiosInstance.get(url, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    } as ElectronResponseTypes;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error; // Return AxiosError if caught
    } else {
      throw new AxiosError("An unexpected error occurred");
    }
  }
}

// POST API REUQEST HANDLER
export async function postApiRequest<T, R>(payload: PostApiRequestTypes<T>) : Promise<ElectronSuccessResponseTypes<R> | AxiosError> {
  const { url, data, headers } = payload;

  const config = {
    headers: headers || {},
  };

  try {
    const response = await axiosInstance.post(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error; // Return AxiosError if caught
    } else {
      throw new AxiosError("An unexpected error occurred");
    }
  }
}
