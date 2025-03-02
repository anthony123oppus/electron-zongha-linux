import axios from "axios";
import axiosInstance from "./axiosInstance.js";

// GET API REQUEST HANDLER
export async function getApiRequest<R>(
  payload: GetAPIPayloadTypes
): Promise<ElectronSuccessResponseTypes<R>> {

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
      success : true,
      message : "Request Executed Successfully"
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Throw a serializable error object
      throw {
        name: "ApiError",
        message: error.message,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Unknown Error",
        data: error.response?.data || null,
        success: false,
      } as ElectronErrorResponseTypes;
    } else {
      // Handle non-Axios errors
      throw {
        name: "UnknownError",
        message: "An unexpected error occurred",
        status: 500,
        statusText: "Internal Server Error",
        data: null,
        success: false,
      } as ElectronErrorResponseTypes;
    }
  }
}

// POST API REUQEST HANDLER
export async function postApiRequest<T, R>(
  payload: PostApiRequestTypes<T>
): Promise<ElectronSuccessResponseTypes<R>> {

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
      success : true,
      message : "Fetching succssfully"
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Throw a serializable error object
      throw {
        name: "ApiError",
        message: error.message,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Unknown Error",
        data: error.response?.data || null,
        success: false,
      } as ElectronErrorResponseTypes;
    } else {
      // Handle non-Axios errors
      throw {
        name: "UnknownError",
        message: "An unexpected error occurred",
        status: 500,
        statusText: "Internal Server Error",
        data: null,
        success: false,
      } as ElectronErrorResponseTypes;
    }
  }
}

// PUT API REQUEST HANDLER
export async function putApiRequest<T, R>(
  payload: PutApiRequestTypes<T>
): Promise<ElectronSuccessResponseTypes<R>> {

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
      success : true,
      message : "Fetching succssfully"
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Throw a serializable error object
      throw {
        name: "ApiError",
        message: error.message,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Unknown Error",
        data: error.response?.data || null,
        success: false,
      } as ElectronErrorResponseTypes;
    } else {
      // Handle non-Axios errors
      throw {
        name: "UnknownError",
        message: "An unexpected error occurred",
        status: 500,
        statusText: "Internal Server Error",
        data: null,
        success: false,
      } as ElectronErrorResponseTypes;
    }
  }
}

// DELETE API REQUEST HANDLER
export async function deleteApiRequest<R>(
  payload : DeleteApiRequestTypes
) : Promise<ElectronSuccessResponseTypes<R>> {

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
      success : true,
      message : "Fetching succssfully"
    } as ElectronSuccessResponseTypes<R>;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Throw a serializable error object
      throw {
        name: "ApiError",
        message: error.message,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Unknown Error",
        data: error.response?.data || null,
        success: false,
      } as ElectronErrorResponseTypes;
    } else {
      // Handle non-Axios errors
      throw {
        name: "UnknownError",
        message: "An unexpected error occurred",
        status: 500,
        statusText: "Internal Server Error",
        data: null,
        success: false,
      } as ElectronErrorResponseTypes;
    }
  }
}

// PATCH API REQUEST HANDLER
export async function patchApiRequest<T,R>(
  payload : PatchApiRequestTypes<T>
) : Promise<ElectronSuccessResponseTypes<R>> {

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
      statusText : response.statusText,
      success : true,
      message : "Fetching succssfully"
    } as ElectronSuccessResponseTypes<R>

  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Throw a serializable error object
      throw {
        name: "ApiError",
        message: error.message,
        status: error.response?.status || 500,
        statusText: error.response?.statusText || "Unknown Error",
        data: error.response?.data || null,
        success: false,
      } as ElectronErrorResponseTypes;
    } else {
      // Handle non-Axios errors
      throw {
        name: "UnknownError",
        message: "An unexpected error occurred",
        status: 500,
        statusText: "Internal Server Error",
        data: null,
        success: false,
      } as ElectronErrorResponseTypes;
    }
  }
}
