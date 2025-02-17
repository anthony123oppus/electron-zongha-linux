import { ElementType } from "react";
import Home from "../_pages/Home/Home";
import ManagerDashboard from "../_pages/ManagerDashboard/ManagerDashboard";
import StudentCheckIn from "../_pages/StudentCheckIn/StudentCheckIn"

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
  },
  STUDENT_CHECKIN : {
    label : "Student Check In",
    path : "/student-checkIn",
    element : StudentCheckIn
  }
};
