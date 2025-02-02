
export interface UsageType {
    [x : string] : number | undefined;
}

export interface PreparedDataType {
  cpuUsage: UsageType[];
  ramUsage: UsageType[];
  storageUsage: UsageType[];
}



export interface TypePost {
  name: string;
  data: {
    year: number;
    price: number;
    CPUmodel: string;
    hardDiskSize: string;
  };
}

export interface PostResponse {
  id: string;
  name: string;
  data: {
    year: number;
    price: number;
    CPUmodel: string;
    hardDiskSize: string;
  };
  createdAt: string;
}

export interface PutResponse extends Omit<PostResponse, "createdAt"> {
  updatedAt: string;
}

export interface CatFactReqTypes {
  fact: string;
  length: number;
}
