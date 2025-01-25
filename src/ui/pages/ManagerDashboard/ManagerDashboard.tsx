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
        className={styles.chart}
        data={cpuUsage}
        tooltipLabel="CPU Usage"
      />
      <BaseChart<UsageType>
        dataKey="ramUsage"
        className={styles.chart}
        data={ramUsage}
        tooltipLabel="Ram Usage"
      />

      <BaseChart<UsageType>
        dataKey="storageUsage"
        className={styles.chart}
        data={storageUsage}
        tooltipLabel="Storage Usage"
      />
    </section>
  );
};

export default ManagerDashboard;
