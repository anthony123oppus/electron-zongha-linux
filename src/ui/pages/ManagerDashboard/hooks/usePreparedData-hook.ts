import { useMemo } from "react";
import { PreparedDataType, UsageType } from "../ManagerDashboard-props";

/**
 * This function will fill the array with the [staticKey] : undefined to complete the array of its maxDataPoint
 */
const fillDataPoint = (
  staticKey: keyof Statistics,
  statics: Statistics[],
  maxDataPoints: number
): UsageType[] => {
  const points = statics.map((stats) => ({
    [staticKey]: stats[staticKey] * 100,
  }));

  return [
    ...points,
    ...Array.from({ length: maxDataPoints - points.length }).map(() => ({
      [staticKey]: undefined,
    })),
  ];
};

export const usePreparedData = (
  statics: Statistics[],
  maxDataPoints: number
): PreparedDataType => {
  // Transform statics data
  const preparedData = useMemo(() => {
    return {
      cpuUsage: fillDataPoint("cpuUsage", statics, maxDataPoints),
      ramUsage: fillDataPoint("ramUsage", statics, maxDataPoints),
      storageUsage: fillDataPoint("storageUsage", statics, maxDataPoints),
    };
  }, [statics, maxDataPoints]);

  return preparedData;
};
