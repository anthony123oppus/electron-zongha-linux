import BaseChart from "../../components/BaseChart/BaseChart";
import { useStatistics } from "./hooks/useStatistics-hook";
import { usePreparedData } from "./hooks/usePreparedData-hook";
import { UsageType } from "./ManagerDashboard-props";
import { MAX_DATA_POINTS } from "./constant/ManagerDashboard-constant";

// STYLE CSS IMPORT
import styles from "./styles/ManagerDashboard.module.css"

const ManagerDashboard = () => {
  // Hooks Initialization Part
  const statics = useStatistics(MAX_DATA_POINTS);
  const { cpuUsage, ramUsage, storageUsage } = usePreparedData(statics, MAX_DATA_POINTS);

  return (
    <section className={styles.dashboard_container}>
      <BaseChart<UsageType>
        dataKey="cpuUsage"
        className="h-60 w-1/4"
        data={cpuUsage}
        tooltipLabel="CPU Usage"
      />
      <BaseChart<UsageType>
        dataKey="ramUsage"
        className="h-60 w-1/4"
        data={ramUsage}
        tooltipLabel="Ram Usage"
      />

      <BaseChart<UsageType>
        dataKey="storageUsage"
        className="h-60 w-1/4"
        data={storageUsage}
        tooltipLabel="Storage Usage"
      />
    </section>
  );
};

export default ManagerDashboard;
