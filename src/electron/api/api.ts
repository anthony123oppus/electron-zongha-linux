import axios, { AxiosError } from "axios";
import axiosInstance from "./axiosInstance.js";

// GET API REQUEST HANDLER
export async function getApiRequest<R>(
  payload: GetAPIPayloadTypes
): Promise<ElectronSuccessResponseTypes<R> | AxiosError> {

  // DESTRUCTURING PROPS
  const { url, headers } = payload;

  // HANDLE EITHER HAVE HEADER OR NULL
  const config = {
    headers: headers || {},
  };

  // TRY CATCH BLOCK OF CODE
  try {
    const response = await axiosInstance.get(url, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error; // Return AxiosError if caught
    } else {
      throw new AxiosError("An unexpected error occurred");
    }
  }
}

// POST API REUQEST HANDLER
export async function postApiRequest<T, R>(
  payload: PostApiRequestTypes<T>
): Promise<ElectronSuccessResponseTypes<R> | AxiosError> {

  // DESTRUCTURING PROPS
  const { url, data, headers } = payload;

  // HANDLE EITHER HAVE HEADER OR NULL
  const config = {
    headers: headers || {},
  };

  // TRY CATCH BLOCK OF CODE
  try {
    const response = await axiosInstance.post(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error; // Return AxiosError if caught
    } else {
      throw new AxiosError("An unexpected error occurred");
    }
  }
}

// PUT API REQUEST HANDLER
export async function putApiRequest<T, R>(
  payload: PutApiRequestTypes<T>
): Promise<ElectronSuccessResponseTypes<R> | AxiosError> {

  // DESTRUCTURING PROPS
  const { url, data, headers } = payload;

  // HANDLE EITHER HAVE HEADER OR NULL
  const config = {
    headers: headers || {},
  };

  // TRY CATCH BLOCK OF CODE
  try {
    const response = await axiosInstance.put(url, data, config);

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw error;
    } else {
      throw new AxiosError("An unexpected error occurred");
    }
  }
}

// DELETE API REQUEST HANDLER
export async function deleteApiRequest<R>(
  payload : DeleteApiRequestTypes
) : Promise<ElectronSuccessResponseTypes<R> | AxiosError> {

  // DESTRUCTURING PROPS
  const {url, headers }  = payload

  // HANDLE EITHER HAVE HEADER OR NULL
  const config = {
    headers : headers || {}
  }

  // TRY CATCH BLOCK OF CODE
  try {
    const response = await axiosInstance.delete(url, config)

    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if(axios.isAxiosError(error)) {
      return error;
    }else{
      throw new AxiosError("An unexpected error occurred")
    }
  }
}

// PATCH API REQUEST HANDLER
export async function patchApiRequest<T,R>(
  payload : PatchApiRequestTypes<T>
) : Promise<ElectronSuccessResponseTypes<R> | AxiosError> {

  // DESTRUCTURING PROPS
  const {url, data, headers} = payload

  // HANDLER EITHER HAVE HEADERS OR NULL
  const config = {
    headers : headers || {}
  }

  // TRY CATCH BLOCK OF CODE
  try {
    const response = await axiosInstance.patch(url, data, config)

    return  {
      data : response.data,
      status : response.status,
      statusText : response.statusText
    } as ElectronSuccessResponseTypes<R>

  } catch (error) {
    if(axios.isAxiosError(error)) {
      return error;
    } else {
      throw new AxiosError("An unexpected error occurred")
    }
  }
}
