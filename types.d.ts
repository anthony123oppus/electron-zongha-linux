/**
 * How To use this types
 * 1. Go to tsconfig.json
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

type EventPayloadMapping = {
    statistics : Statistics;
    getStaticData : StaticData;
}

// INTERFACE TYPESCRIPT -- when there is two interface name it will automatically concat
interface Window {
  electron: {
    subscribeStatistics: (callback: (statistics: Statistics) => void) => void;
    getStaticData: () => Promise<StaticData>;
  };
}
