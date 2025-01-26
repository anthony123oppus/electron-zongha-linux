import { Fragment, useEffect } from "react";
import { AppRoutes } from "./routes/AppRoutes";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    return window.electron.subscribeSystemView((view) => navigate(view));
  }, [navigate]);

  return (
    <Fragment>
      <AppRoutes />
      <a href="/resource" className="text-black">
        ajsfkljail
      </a>
    </Fragment>
  );
}

export default App;
