import BaseChart from "../../components/BaseChart/BaseChart";
import { useStatistics } from "./hooks/useStatistics-hook";
import { usePreparedData } from "./hooks/usePreparedData-hook";
import { UsageType } from "./ManagerDashboard-props";
import { MAX_DATA_POINTS } from "./constant/ManagerDashboard-constant";

// STYLE CSS IMPORT
import styles from "./styles/ManagerDashboard.module.css"
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { CatFactReqTypes, PostResponse, TypePost } from "../../App";

const ManagerDashboard = () => {

  const navigate = useNavigate()
  // Hooks Initialization Part
  const statics = useStatistics(MAX_DATA_POINTS);
  const { cpuUsage, ramUsage, storageUsage } = usePreparedData(statics, MAX_DATA_POINTS);

    const [catFact, setCatFact] = useState<string>("")
    const [postSample, setPostSample] = useState<PostResponse | null>(null)

      const handleClickPost = async () => {
        try {
          const response = await window.electron.postApiRequest<TypePost, PostResponse>({
            url: "https://api.restful-api.dev/objects",
            data: {
              name: "Apple MacBook Pro 16",
              data: {
                year: 2019,
                price: 1849.99,
                CPUmodel: "Intel Core i9", // Fixed the key
                hardDiskSize: "1 TB",     // Fixed the key
              },
            },
          });
          setPostSample(response.data)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }
    
      const getRequest = async () => {
        try {
          const response = await window.electron.getApiRequest<CatFactReqTypes>({url : "fact"})
          setCatFact(response.data.fact)
          console.log(response)
        } catch (error) {
          console.log(error)
        }
      }

  return (
    <section className={styles.dashboard_container}>
      <div onClick={() => navigate("/")} >Home</div>
      <div className="text-black"onClick={() => navigate("resource")}>
        ajsfkljail
      </div>
      <div>
        {catFact}
      </div>
      <div>
        {postSample && postSample.name}
      </div>

      <div onClick={handleClickPost}>
        hello try post
      </div>
      <div onClick={getRequest}>
        Smaple Gte request
      </div>
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
