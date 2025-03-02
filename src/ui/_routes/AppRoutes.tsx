import { Routes, Route } from "react-router-dom";
import { ROUTEPROPS } from "./RouteProps";
import { createElement } from "react";

export function AppRoutes() {
  return (
      <Routes>
        <Route
          path={ROUTEPROPS.HOME.path}
          element={createElement(ROUTEPROPS.HOME.element)}
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
        <Route
          path={ROUTEPROPS.SYSTEM_DASHBOARD.path}
          element={<ROUTEPROPS.SYSTEM_DASHBOARD.element />}
        />
      </Routes>
  );
}
