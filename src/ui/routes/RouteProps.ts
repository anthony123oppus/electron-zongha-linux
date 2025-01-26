import { ElementType } from "react";
import Home from "../pages/Home/Home";
import ManagerDashboard from "../pages/ManagerDashboard/ManagerDashboard";

export interface RoutePropsInterface {
  label: string;
  path: string;
  element: ElementType;
}

export const ROUTEPROPS: { [key: string]: RoutePropsInterface } = {
  HOME: {
    label: "Home",
    path: "/",
    element: Home,
  },
  MANAGER : {
    label :  "Dashboard Manager",
    path : "/resource",
    element : ManagerDashboard
  }
};
