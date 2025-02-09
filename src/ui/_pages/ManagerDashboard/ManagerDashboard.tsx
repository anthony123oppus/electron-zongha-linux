import BaseChart from "../../_components/BaseChart/BaseChart";
import { useStatistics } from "./_hooks/useStatistics-hook";
import { usePreparedData } from "./_hooks/usePreparedData-hook";
import { PostResponse, TypePost, UsageType } from "./ManagerDashboard-props";
import { MAX_DATA_POINTS } from "./_constant/ManagerDashboard-constant";

// STYLE CSS IMPORT
import styles from "./_styles/ManagerDashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetSampleMutation, usePostSampleMutation } from "./_operation/ManagerDashboard-fetch";
import { useAppDispatch } from "../../_redux/storeType";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  // Hooks Initialization Part
  const dispatch = useAppDispatch();
  const statics = useStatistics(MAX_DATA_POINTS);
  const { cpuUsage, ramUsage, storageUsage } = usePreparedData(
    statics,
    MAX_DATA_POINTS
  );

  const [postSample, setPostSample] = useState<PostResponse | null>(null);
  const [catFact, setCatFact] = useState<string>("");

  const { mutate } = useGetSampleMutation({ setCatFact, dispatch });
  const {mutate : postMutate} = usePostSampleMutation({setPostSample})
  // const {data} = useGetSampleQuery();

  const handleClickPost = async () => {
    const data : TypePost =  {
      name: "Apple MacBook Pro 16",
      data: {
        year: 2019,
        price: 1849.99,
        CPUmodel: "Intel Core i9", // Fixed the key
        hardDiskSize: "1 TB", // Fixed the key
      },
    }

    postMutate(data)
  };

  return (
    <section className={styles.dashboard_container}>
      {/* <div>{data.data.fact}</div> */}
      <div onClick={() => navigate("/")}>Home</div>
      <div className="text-black" onClick={() => navigate("resource")}>
        ajsfkljail
      </div>
      <div>{catFact}</div>
      <div>{postSample && postSample.name}</div>

      <div onClick={handleClickPost}>hello try post</div>
      <div onClick={() => mutate()}>Smaple Gte request</div>
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
