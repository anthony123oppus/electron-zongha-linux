import { useEffect } from "react";
import BaseChart from "./components/BaseChart";

function App() {

  useEffect(() => {
    const unsub = window.electron.subscribeStatistics((stats) =>
      console.log(stats)
    );
    return unsub;
  }, []);

  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="w-fit h-40">
        <BaseChart data={[{value : 45}]}/>
      </div>
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello worlddd
      </h1>
    </section>
  );
}

export default App;
