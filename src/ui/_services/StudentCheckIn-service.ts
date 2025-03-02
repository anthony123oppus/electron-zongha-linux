import { electronApi } from ".";

// need to throw error for not error for the mutationFn error
export const StudentCheckInService = async <R>(data: string) => {
  try {
    const serviceResponse = await electronApi.get<R>({
      url: `http://192.168.99.168:8000/read-rfid-tag/${data}`,
    });

    return serviceResponse;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
