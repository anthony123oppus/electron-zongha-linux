import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.electron.subscribeStatistics(stats => console.log(stats))
  }, [])
  return (
    <section className="w-screen h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold underline text-red-500">Hello worlddd</h1>
    </section>
  );
}

export default App;
