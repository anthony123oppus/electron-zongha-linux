import { ReactNode } from "react";
// import { GENDERENUM } from "../../../_globalTypes/GlobalTypes";
import { StudentInterface } from "../operation/StudentCheckin-fetch";

export interface UserProfileCard {
  id?: string;
  icon: ReactNode;
  label: string;
  value: string | number;
}

// export interface StudentDataInterface {
//   image: string;
//   gender: GENDERENUM.MALE | GENDERENUM.FEMALE;
//   lastName: string;
//   firstName: string;
//   middleInitial: string;
// }

export interface RecentStudentCardProps {
  id?: string;
  student: StudentInterface;
}
