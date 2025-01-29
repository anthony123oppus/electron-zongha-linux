/**
 * How To use this types
 * 1. Go to tsconfig.json -- both electron folder and react tsconfig 
 * 2. add this code inside compilerOptions
 * Code : "types": ["./types.d.ts"],
 */

type Statistics = {
  cpuUsage: number;
  ramUsage: number;
  storageUsage: number;
};

type StaticData = {
  totalStorage: number;
  cpuName: string;
  totalMemoryGB: number;
};

type SystemView = "resource";

type GetAPIPayloadTypes = {
  url: string;
  headers?: Record<string, string> | null;
};

type PostApiRequestTypes<T> = {
  url: string;
  data: T;
  headers?: Record<string, string> | null;
};

type PutApiRequestTypes<T> = {
  url: string;
  data: T;
  headers?: Record<string, string> | null;
};


type ElectronSuccessResponseTypes<R> = {
  data: R;
  status: number;
  statusText: string;
};

type EventPayloadMapping = {
  statistics: Statistics;
  getStaticData: StaticData;
  systemView: SystemView;
  apiGetRequest: ElectronSuccessResponseTypes<unknown>;
  apiPostRequest: ElectronSuccessResponseTypes<unknown>;
};

type UnsubscribedFunction = () => void;

// INTERFACE TYPESCRIPT -- when there is two interface name it will automatically concatinate
interface Window {
  electron: {

    subscribeStatistics: (
      callback: (statistics: Statistics) => void
    ) => UnsubscribedFunction;

    getStaticData: () => Promise<StaticData>;

    subscribeSystemView: (
      callback: (systemView: SystemView) => void
    ) => UnsubscribedFunction;

    getApiRequest: <R>(
      option: GetAPIPayloadTypes
    ) => Promise<ElectronSuccessResponseTypes<R>>;

    postApiRequest: <T, R>(
      option: PostApiRequestTypes<T>
    ) => Promise<ElectronSuccessResponseTypes<R>>;
  };
}
