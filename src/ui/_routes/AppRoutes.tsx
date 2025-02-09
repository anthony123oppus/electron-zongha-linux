import { Routes, Route } from "react-router-dom";
import { ROUTEPROPS } from "./RouteProps";

export function AppRoutes() {
  return (
      <Routes>
        <Route
          path={ROUTEPROPS.HOME.path}
          element={<ROUTEPROPS.HOME.element />}
        />
        <Route 
            path="/sample" 
            element={<h1>Hello</h1>} 
        />
        <Route
          path={ROUTEPROPS.MANAGER.path}
          element={<ROUTEPROPS.MANAGER.element />}
        />
        <Route 
          path={ROUTEPROPS.STUDENT_CHECKIN.path}
          element={<ROUTEPROPS.STUDENT_CHECKIN.element />}
        />
      </Routes>
  );
}
