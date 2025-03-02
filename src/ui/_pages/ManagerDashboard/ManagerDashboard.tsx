import BaseChart from "../../_components/BaseChart/BaseChart";
import { useStatistics } from "./_hooks/useStatistics-hook";
import { usePreparedData } from "./_hooks/usePreparedData-hook";
import { PostResponse, PutResponse, TypePost, TypePut, UsageType } from "./ManagerDashboard-props";
import { MAX_DATA_POINTS } from "./_constant/ManagerDashboard-constant";

// STYLE CSS IMPORT
import styles from "./_styles/ManagerDashboard.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDeleteSampleMutation, useGetSampleMutation, usePatchSampleMutation, usePostSampleMutation, usePutSampleMutation } from "./_operation/ManagerDashboard-fetch";
import { useAppDispatch } from "../../_redux/storeType";
import DefaultLayout from "../../_sections/Layout/DefaultLayout";

const ManagerDashboard = () => {
  const navigate = useNavigate();
  // Hooks Initialization Part
  const dispatch = useAppDispatch();
  const statics = useStatistics(MAX_DATA_POINTS);
  const { cpuUsage, ramUsage, storageUsage } = usePreparedData(
    statics,
    MAX_DATA_POINTS
  );

  const [postSample, setPostSample] = useState<PostResponse | PutResponse | null>(null);
  const [catFact, setCatFact] = useState<string>("");

  const { mutate } = useGetSampleMutation({ setCatFact, dispatch });
  const {mutate : postMutate} = usePostSampleMutation({setPostSample})
  const {mutate : putMutate} = usePutSampleMutation({setPostSample})
  const {mutate : patchMutate} = usePatchSampleMutation({setPostSample})
  const {mutate : deleteMutate} = useDeleteSampleMutation();
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

  const handleClickPut = async () => {
    const data : TypePut = {
      name: "Apple MacBook M3 Chip",
      data: {
        year: 2025,
        price: 1849.99,
        CPUmodel: "Intel Core i9", // Fixed the key
        hardDiskSize: "1 TB", // Fixed the key
        color : "Red"
      },
    }

    putMutate(data)
  }

  const handleClickPatch = async () => {
    const data : {name : string} = {
      name : "Apple Macbook M4 Chip (Updated)"
    }

    patchMutate(data)
  }

  return (
    <DefaultLayout>
      <section className={styles.dashboard_container}>
        {/* <div>{data.data.fact}</div> */}
        <div onClick={() => navigate("/")}>Home</div>
        <div className="text-black" onClick={() => navigate("resource")}>
          ajsfkljail
        </div>
        <div>{catFact}</div>
        <div>{postSample && postSample.name}</div>

        <div onClick={handleClickPost}>hello try post</div>
        <div onClick={handleClickPut}>hello try put</div>
        <div onClick={handleClickPatch}>hello try patch</div>
        <div onClick={() => deleteMutate() }>hello try delete</div>
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
    </DefaultLayout>
  );
};

export default ManagerDashboard;
