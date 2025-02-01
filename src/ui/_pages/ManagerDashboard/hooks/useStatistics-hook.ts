import { useEffect, useState } from "react";

const ZONGHA = {
  EMPTY_ARRAY: [],
};

export const useStatistics = (dataPointCount: number): Statistics[] => {
  const [staticData, setStaticData] = useState<Statistics[]>(
    ZONGHA.EMPTY_ARRAY
  );

  useEffect(() => {
    const unsub = window.electron.subscribeStatistics((stats) =>
      setStaticData((prevData) => {
        const newData = [...prevData, stats];

        if (newData.length > dataPointCount) {
          newData.shift();
        }

        return newData;
      })
    );
    return unsub;
  }, [dataPointCount]);

  return staticData;
};
