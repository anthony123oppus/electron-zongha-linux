import { useState } from "react";
import Divider from "../../_components/Divider/Divider";
import {
  DIVIDERSTYLE,
  LABELFONT,
  POSITION,
} from "../../_components/Divider/Divider-props";
import { ClockIcon, FullNameIcon } from "../../_components/SVGIcons/SVGIcons";
import { schoolLogo, studentImage } from "../../_utils/image-util";
import styles from "./styles/StudentCheckIn.module.css";
import Navbar from "../../_sections/Navbar/Navbar";
import UserprofileCard from "./components/UserProfileCard";

const StudentCheckIn = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  return (
    <section className={styles.student_checkin_container}>
      <div className={styles.student_information}>
        {/* TODO CHOOSE THE SCHOOL LOGO DESIGN */}
        {/* <div className={styles.school_logo_container}>
                <div className={styles.school_logo}>
                    <img src={schoolLogo} alt="School Logo"  className={styles.school_logo_img}/>
                </div> 
                <div className="w-full absolute pl-24 rounded-l-full overflow-hidden">
                    <h1 className="z-10 w-fit whitespace-nowrap bg-[#1ad1ff] -translate-x-20 pl-20 pr-4 py-1 text-black font-semibold text-md rounded-r-[15px] font-lexend">Bohol Island State University</h1>
                    <h5 className="bg-green-500 -translate-x-20 pl-20 text-sm rounded-br-[20px] font-medium font-inter py-[2px]">Zamora Bilar, Bohol</h5>
                </div>
            </div> */}
        <div className={styles.school_logo_container}>
          <img src={schoolLogo} alt="" className="w-24 h-24" />
          <h1 className={styles.school_logo}>Bohol Island State University</h1>
          <h5 className={styles.school_logo_address}>Zamora Bilar, Bohol</h5>
        </div>
        <Divider
          label="Student Personal Information"
          position={POSITION.CENTER}
          style={DIVIDERSTYLE.SOLID}
          labelFont={LABELFONT.SMALL}
        />
        <div className="w-full h-fit flex flex-col gap-4">
          <UserprofileCard
            label="Full Name"
            icon={<FullNameIcon />}
            value="Bautista, Kristel Jane B."
          />
          <UserprofileCard
            label="Yr & Section"
            icon={<FullNameIcon />}
            value="Grade - 9 Grasshopper"
          />
          <UserprofileCard
            label="Gender"
            icon={<FullNameIcon />}
            value="Female"
          />
          <UserprofileCard
            label="Student ID"
            icon={<FullNameIcon />}
            value="2024 - 022918"
          />
        </div>
        <Divider
          label="Student Organization"
          position={POSITION.CENTER}
          style={DIVIDERSTYLE.SOLID}
          labelFont={LABELFONT.SMALL}
        />
        <div className="w-full h-full flex justify-center flex-wrap gap-2">
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
          <img
            src={schoolLogo}
            alt=""
            className="rounded-full h-16 w-16 bg-white p-1"
          />
        </div>
      </div>
      <div className={styles.student_checkin}>
        <div className={styles.student_profile}>
          <div className={styles.student_header}>
            <h1 className={styles.header_text}>LAST STUDENT LOG</h1>
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
        <div className={styles.student_list}>
          <div className="w-full flex h-16 justify-end pr-10">
            <button
              disabled={isButtonDisabled}
              onClick={() => {
                setIsActive(!isActive);
                setIsOpen(!isOpen);
              }}
              className="bg-white p-3 w-fit rounded-full cursor-pointer shadow-insideShadow z-10 flex justify-end gap-5"
            >
              {/* <HamburgerMenu /> */}
              <div className="w-8 h-8 flex flex-col justify-around items-center p-1">
                <span
                  className={`w-full h-[3px] bg-mightnightBlue rounded transition-transform duration-400 ${
                    isOpen ? "translate-y-[8px] rotate-45 bg-red-500" : ""
                  }`}
                ></span>
                <span
                  className={`w-3/5 h-1 bg-mightnightBlue rounded transition-all duration-400 ${
                    isOpen ? "opacity-0 w-0" : ""
                  }`}
                ></span>
                <span
                  className={`w-full h-[3px] bg-mightnightBlue rounded transition-transform duration-400 ${
                    isOpen ? "-translate-y-[8px] -rotate-45 bg-red-500" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
          <div className={styles.student_list_container}>
            <div className="w-full flex flex-end h-20">
                <Divider
                    label="RECENT STUDENT UPDATES"
                    position={POSITION.CENTER}
                    style={DIVIDERSTYLE.DOUBLE}
                    labelFont={LABELFONT.MEDIUM}
                />
            </div>
            <div className="w-full h-full flex flex-wrap gap-5 justify-between">
              <div className="w-[180px] h-fit bg-white relative rounded-[15px] overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1AD1FF"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Dimonio,
                  </h5>
                  <h5 className="font-semibold ">Satta Nash R.</h5>
                </div>
              </div>
              <div className="w-[180px] h-fit bg-white relative rounded-[15px] overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF0066"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3 text-white">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Lapalapa,
                  </h5>
                  <h5 className="font-semibold ">Sapatacio S.</h5>
                </div>
              </div>
              <div className="w-[180px] h-fit bg-white relative rounded-[15px] overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1AD1FF"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Kapuliki,
                  </h5>
                  <h5 className="font-semibold ">Lando Rey R.</h5>
                </div>
              </div>
              <div className="w-[180px] h-fit bg-white rounded-[15px] relative overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FF0066"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3 text-white">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Distansya,
                  </h5>
                  <h5 className="font-semibold ">Jhon Earl Gaven R.</h5>
                </div>
              </div>
              <div className="w-[180px] h-fit bg-white relative rounded-[15px] overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1AD1FF"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Bautista,
                  </h5>
                  <h5 className="font-semibold ">Jhon Roy Earl R.</h5>
                </div>
              </div>
              <div className="w-[180px] h-fit bg-white relative rounded-[15px] overflow-hidden shadow-profilePicShadow">
                <img
                  src={studentImage}
                  alt="Second Student"
                  className="w-[180px] bg-white"
                />
                <svg
                  className="absolute -left-20 -bottom-40 w-80 drop-shadow-blob"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <svg
                  className="absolute -left-20 -bottom-[164px] w-80"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#1AD1FF"
                    d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
                    transform="translate(100 100)"
                  />
                </svg>
                <div className="h-12 relative z-1 px-4 -translate-y-3">
                  <h5 className="text-xl font-semibold leading-4 font-lexend">
                    Reyes,
                  </h5>
                  <h5 className="font-semibold ">Catherine R.</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar
        isActive={isActive}
        setIsActive={setIsActive}
        setIsButtonDisabled={setIsButtonDisabled}
      />
    </section>
  );
};

export default StudentCheckIn;
