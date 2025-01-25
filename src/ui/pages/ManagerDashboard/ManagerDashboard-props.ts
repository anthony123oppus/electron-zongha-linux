
export interface UsageType {
    [x : string] : number | undefined;
}

export interface PreparedDataType {
  cpuUsage: UsageType[];
  ramUsage: UsageType[];
  storageUsage: UsageType[];
}
