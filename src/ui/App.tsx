import { Fragment, useEffect } from "react";
import { AppRoutes } from "./_routes/AppRoutes";
import { useNavigate } from "react-router-dom";
import Loader from "./_components/Loader/Loader";
import { InitialLoaderStateTypes } from "./_redux/loader.slice";
import { RootState, useAppSelector } from "./_redux/storeType";

function App() {
  const navigate = useNavigate();

  const loader: InitialLoaderStateTypes = useAppSelector(
    (state: RootState) => state.loader
  );

  useEffect(() => {
    return window.electron.subscribeSystemView((view) => navigate(view));
  }, [navigate]);

  useEffect(() => {
    window.electron.sendReactReady();
  },[])

  return (
    <Fragment>
      <AppRoutes />
      {loader.isLoading && 
          <Loader />
      }
    </Fragment>
  );
}

export default App;
