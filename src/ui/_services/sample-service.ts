export const sampleGetService = async <T>(): Promise<
  ElectronSuccessResponseTypes<T>
> => {
  try {
    const serviceResponse = await window.electron.getApiRequest<T>({
      url: "fact",
    });

    return serviceResponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const samplePostService = async <T, R>(data: T) => {
  try {
    const serviceReponse = await window.electron.postApiRequest<T, R>({
      url: "https://api.restful-api.dev/objects",
      data
    });

    return serviceReponse;
  } catch (error) {
    console.error(error);
    throw error;
  }
};


// need to throw error for not error for the mutationFn error
export const sampleGetRfid = async <R>(data : string) => {
  try {
    const serviceResponse = await window.electron.getApiRequest<R>({
      url : `http://192.168.113.168:8000/read-rfid-tag/${data}`
    })

    return serviceResponse
  } catch (error) {
    console.log(error)
    throw error
  }
}
