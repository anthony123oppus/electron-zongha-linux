import Divider from "../../_components/Divider/Divider";
import {
  DIVIDERSTYLE,
  LABELFONT,
  POSITION,
} from "../../_components/Divider/Divider-props";
import { ClockIcon, FullNameIcon } from "../../_components/SVGIcons/SVGIcons";
import { schoolLogo, studentImage } from "../../_utils/image-util";
import styles from "./styles/StudentCheckIn.module.css";
import UserprofileCard from "./components/UserProfileCard";
import RecentStudentCard from "./components/RecentStudentCard";
import DefaultLayout from "../../_sections/Layout/DefaultLayout";
import { GENDERENUM } from "../../_globalTypes/GlobalTypes";
import { useProfileAnim, useRecentStudentAnim, useSchoolLogo } from "./hooks/useAnimation";
import SchoolLogo from "./components/SchoolLogo";
import { useInactiveScreen } from "./hooks/useInactiveScreen";
import ModalAds from "./components/ModalAds";
import { translate } from "../../../i18n/translate";

const studentSampleData = [
  {
    id: 1,
    image: studentImage,
    gender: GENDERENUM.MALE,
    lastName: "Diminio",
    firstName: "Satta Nash",
    middleInitial: "D",
  },
  {
    id: 2,
    image: studentImage,
    gender: GENDERENUM.FEMALE,
    lastName: "Lana",
    firstName: "Samantha",
    middleInitial: "D",
  },
  {
    id: 3,
    image: studentImage,
    gender: GENDERENUM.MALE,
    lastName: "Lapalapa",
    firstName: "Sapatacio",
    middleInitial: "D",
  },
  {
    id: 4,
    image: studentImage,
    gender: GENDERENUM.FEMALE,
    lastName: "Regla",
    firstName: "Puberta",
    middleInitial: "B",
  },
  {
    id: 5,
    image: studentImage,
    gender: GENDERENUM.MALE,
    lastName: "Sayop",
    firstName: "Perfecto",
    middleInitial: "D",
  },
  {
    id: 6,
    image: studentImage,
    gender: GENDERENUM.FEMALE,
    lastName: "Diminio",
    firstName: "Satta Nash",
    middleInitial: "D",
  },
];

const StudentCheckIn = () => {

  // ANIMATION HOOKS BLOCKS CODE
  useProfileAnim()
  useRecentStudentAnim()
  useSchoolLogo()

  // NORMAL HOOKS BLOCKS CODE
  const {isInactive, setIsInactive} = useInactiveScreen(10000)

  return (
    <DefaultLayout>
      <section className={styles.student_checkin_container}>
        <div className={styles.student_info_container}>
          <div className={styles.student_information}>
            <SchoolLogo />
            <Divider
              label={translate("studentCheckin.personalInformation")}
              position={POSITION.CENTER}
              style={DIVIDERSTYLE.SOLID}
              labelFont={LABELFONT.SMALL}
            />
            <div className={styles.student_user_profile_card}>
              <UserprofileCard
                id="infoTag"
                label="Full Name"
                icon={<FullNameIcon />}
                value="Bautista, Kristel Jane B."
              />
              <UserprofileCard
                id="infoTag"
                label="Yr & Section"
                icon={<FullNameIcon />}
                value="Grade - 9 Grasshopper"
              />
              <UserprofileCard
                id="infoTag"
                label="Gender"
                icon={<FullNameIcon />}
                value="Female"
              />
              <UserprofileCard
                id="infoTag"
                label="Student ID"
                icon={<FullNameIcon />}
                value="2024 - 022918"
              />
            </div>
            <Divider
              label={translate("studentCheckin.studentOrgs")}
              position={POSITION.CENTER}
              style={DIVIDERSTYLE.SOLID}
              labelFont={LABELFONT.SMALL}
            />
            <div className={styles.student_org_container}>
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
              <img
                src={schoolLogo}
                alt=""
                className={styles.student_org}
              />
            </div>
          </div>
          <div className={styles.student_profile}>
            <div className={styles.student_header}>
              <h1 className={styles.header_text}>
                {translate("studentCheckin.lastLog")}
              </h1>
            </div>
            <div className={styles.student_profile_container}>
              <div className={styles.student_profile_pic}>
                <img
                  src={studentImage}
                  alt="Student-Profile"
                  className={styles.student_pic}
                />
              </div>
              <div className={styles.student_log_date_time}>
                <div className={styles.student_log}>
                  <h5 className={styles.attendance_log}>
                    <ClockIcon />
                    TIME OUT
                  </h5>
                  <h1 className={styles.student_log_time}>07 : 19</h1>
                </div>
                <div className={styles.student_log_date}>February 09, 2025</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.student_checkin}>
          <div className={styles.student_list}>
            <div className={styles.student_list_container}>
              {/* TODO: NEED TO SEPARATE THE TAILWIND CSS */}
              <div className="w-full flex flex-end h-20">
                <Divider
                  label={translate("studentCheckin.recentUpdates")}
                  position={POSITION.CENTER}
                  style={DIVIDERSTYLE.DOUBLE}
                  labelFont={LABELFONT.MEDIUM}
                />
              </div>
              <div className={styles.student_recent_container}>
                {studentSampleData &&
                  studentSampleData.map((student) => (
                    <RecentStudentCard 
                      key={student.id} 
                      id="recentStudent"
                      student={student} 
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalAds 
        isInactive={isInactive}
        setIsInactive={setIsInactive}
      />
    </DefaultLayout>
  );
};

export default StudentCheckIn;
