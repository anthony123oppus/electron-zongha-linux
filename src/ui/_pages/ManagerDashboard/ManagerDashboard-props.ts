
export interface UsageType {
    [x : string] : number | undefined;
}

export interface PreparedDataType {
  cpuUsage: UsageType[];
  ramUsage: UsageType[];
  storageUsage: UsageType[];
}



export interface TypePost<T = dataType1> {
  name: string;
  data: T;
}

export interface TypePut<T = dataType2> {
  name: string;
  data: T;
}

interface dataType1 {
  year: number;
  price: number;
  CPUmodel: string;
  hardDiskSize: string;
};

interface dataType2 extends dataType1 {
  color : string
};

export interface PostResponse<T = dataType1> {
  id: string;
  name: string;
  data: T;
  createdAt: string;
}

export interface PutResponse<T = dataType2> extends Omit<PostResponse<T>, "createdAt"> {
  updatedAt: string;
}

export interface CatFactReqTypes {
  fact: string;
  length: number;
}
