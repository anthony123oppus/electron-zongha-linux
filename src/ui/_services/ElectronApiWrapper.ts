type ApiPayload<T = unknown> =
  | GetAPIPayloadTypes
  | PostApiRequestTypes<T>
  | PutApiRequestTypes<T>
  | DeleteApiRequestTypes
  | PatchApiRequestTypes<T>;

class ElectronApiWrapper {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

    // Overloaded requestInterceptor for GET requests
    private async requestInterceptor(payload: GetAPIPayloadTypes): Promise<GetAPIPayloadTypes>;
    // Overloaded requestInterceptor for POST requests
    private async requestInterceptor<T>(payload: PostApiRequestTypes<T>): Promise<PostApiRequestTypes<T>>;
    // Overloaded requestInterceptor for PUT requests
    private async requestInterceptor<T>(payload: PutApiRequestTypes<T>): Promise<PutApiRequestTypes<T>>;
    // Overloaded requestInterceptor for DELETE requests
    private async requestInterceptor(payload: DeleteApiRequestTypes): Promise<DeleteApiRequestTypes>;
    // Overloaded requestInterceptor for PATCH requests
    private async requestInterceptor<T>(payload: PatchApiRequestTypes<T>): Promise<PatchApiRequestTypes<T>>;

  // Custom Request Interceptor
  private async requestInterceptor<T>(
    payload: ApiPayload<T>
  ): Promise<ApiPayload<T>> {
    const modifiedPayload = {
      ...payload,
      url: `${this.baseUrl}${payload.url}`,
    };

    return modifiedPayload;
  }

// *TODO* : Custom Response Interceptor Not Useful 
  private async responseInterceptor<R>(
    response: ElectronSuccessResponseTypes<R>
  ): Promise<ElectronSuccessResponseTypes<R>> {

    if (response.success) {
      return response; // Return successful responses
    } else {
      throw response; // Throw error responses
    }
  }

  // GET REQUEST
  async get<R>(
    payload: GetAPIPayloadTypes
  ): Promise<ElectronSuccessResponseTypes<R>> {
    try {
      const modifiedPayload = await this.requestInterceptor(payload);
      const response = await window.electron.getApiRequest<R>(modifiedPayload);

      return await this.responseInterceptor<R>(response);
    } catch (error) {
      console.error("Error Get API Request", error); // Log the error
      throw error as ElectronErrorResponseTypes; // Re-throw the error
    }
  }

  async post<T,R>(
    payload : PostApiRequestTypes<T>
  ) : Promise<ElectronSuccessResponseTypes<R>> {
    try {
        const modifiedPayload = await this.requestInterceptor<T>(payload)
        const response = await window.electron.postApiRequest<T,R>(modifiedPayload)

        return await this.responseInterceptor<R>(response)
        
    } catch (error) {
        console.error("Error Post API Request", error)
        throw error as ElectronErrorResponseTypes;
    }
  }

  async put<T,R>(
    payload : PutApiRequestTypes<T>
  ) : Promise<ElectronSuccessResponseTypes<R>> {
    try {
      const modifiedPayload = await this.requestInterceptor<T>(payload)
      const response = await window.electron.putApiReqeust<T,R>(modifiedPayload)

      return await this.responseInterceptor<R>(response);
      
    } catch (error) {
      console.error("Error Put API Request", error)
      throw error as ElectronErrorResponseTypes
    }
  }

  async delete<R>(
    payload : DeleteApiRequestTypes
  ) :Promise<ElectronSuccessResponseTypes<R>> {
    try {
      const modifiedPayload = await this.requestInterceptor(payload)
      const deleteResponse = await window.electron.deleteApiRequest<R>(modifiedPayload)

      return await this.responseInterceptor(deleteResponse);
    } catch (error) {
      console.error("Error Delete API Request", error)
      throw error as ElectronErrorResponseTypes
    }
  }

  async patch<T,R>(
    payload : PatchApiRequestTypes<T>
  ) : Promise<ElectronSuccessResponseTypes<R>> {
    try {
      const modifiedPayload = await this.requestInterceptor<T>(payload);
      const patchResponse = await window.electron.patchApiRequest<T,R>(modifiedPayload)

      return await this.responseInterceptor(patchResponse);
    } catch (error) {
      console.error("Error Patch API Request", error)
      throw error as ElectronErrorResponseTypes
    }
  }

}

// Default is Empty String since I already add a base URL in axios in electron axiosInstance
export const electronApi = new ElectronApiWrapper("");
