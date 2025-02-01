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
