import { electronApi } from ".";

export const sampleGetService = async <R>(): Promise<
  ElectronSuccessResponseTypes<R>
> => {
  try {
    const serviceResponse = await electronApi.get<R>({
      url: "/fact", // Relative URL (base URL is already included)
    });

    return serviceResponse;
  } catch (error) {
    const errorResponse = error as ElectronErrorResponseTypes;
    throw errorResponse;
  }
};

export const samplePostService = async <T, R>(data: T) => {
  try {
    const serviceReponse = await electronApi.post<T, R>({
      url: "https://api.restful-api.dev/objects",
      data,
    });

    console.log(serviceReponse)

    return serviceReponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const samplePutService = async <T,R> (data :T) => {
  try {
    const serviceResponse = await electronApi.put<T,R>({
      url : `https://api.restful-api.dev/objects/ff808181932badb601955599d23c569b`,
      data
    })
    console.log(serviceResponse)

    return serviceResponse;
  } catch (error) {
    throw error as ElectronErrorResponseTypes
  }
}

export const samplePatchService = async <T,R> (data :T) => {
  try {
    const serviceResponse = await electronApi.patch<T,R>({
      url : `https://api.restful-api.dev/objects/ff808181932badb601955599d23c569b`,
      data
    })
    console.log(serviceResponse)

    return serviceResponse;
  } catch (error) {
    throw error as ElectronErrorResponseTypes
  }
}

export const sampleDeleteService = async <R> () => {
  try {
    const serviceResponse = await electronApi.delete<R>({
      url : `https://api.restful-api.dev/objects/ff808181932badb601955599d23c569b`, 
    })

    console.log(serviceResponse)
    return serviceResponse;
  } catch (error) {
    throw error as ElectronErrorResponseTypes
  }
}

// need to throw error for not error for the mutationFn error
export const sampleGetRfid = async <R>(data: string) => {
  try {
    const serviceResponse = await electronApi.get<R>({
      url: `http://192.168.113.168:8000/read-rfid-tag/${data}`,
    });

    return serviceResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
