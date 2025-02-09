import { useState } from "react"
import Divider from "../../_components/Divider/Divider"
import { DIVIDERSTYLE, POSITION } from "../../_components/Divider/Divider-props"
import { ClockIcon, FullNameIcon } from "../../_components/SVGIcons/SVGIcons"
import { schoolLogo, studentImage } from "../../_utils/image-util"
import UserprofileCard from "./_components/UserprofileCard"
import styles from "./_styles/StudentCheckIn.module.css"

const StudentCheckIn = () => {

    const [isOpen, setIsOpen] = useState(false);

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
                <img src={schoolLogo} alt="" className="w-24 h-24"/>
                <h1 className={styles.school_logo}>Bohol Island State University</h1>
                <h5 className={styles.school_logo_address}>Zamora Bilar, Bohol</h5>
            </div>
            <Divider 
                label="Student Personal Information" 
                position={POSITION.CENTER}
                style={DIVIDERSTYLE.SOLID}
            />
            <div className="w-full h-fit flex flex-col gap-4">
                <UserprofileCard label="Full Name" icon={<FullNameIcon />} value="Bautista, Kristel Jane B."/>
                <UserprofileCard label="Yr & Section" icon={<FullNameIcon />} value="Grade - 9 Grasshopper"/>
                <UserprofileCard label="Gender" icon={<FullNameIcon />} value="Female"/>
                <UserprofileCard label="Student ID" icon={<FullNameIcon />} value="2024 - 022918"/>
            </div>
            <Divider 
                label="Student Organization" 
                position={POSITION.CENTER}
                style={DIVIDERSTYLE.SOLID}
            />
            <div className="w-full h-full flex justify-center flex-wrap gap-2">
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
                <img src={schoolLogo} alt=""  className="rounded-full h-16 w-16 bg-white p-1"/>
            </div>
       </div>
       <div className={styles.student_checkin}>
            <div className={styles.student_profile}>
                <div className={styles.student_header}>
                    <h1 className={styles.header_text}>LAST STUDENT LOG</h1>
                </div>
                <div className={styles.student_profile_container}>
                    <div className={styles.student_profile_pic}>
                        <img src={studentImage} alt="Student-Profile" className={styles.student_pic}/>
                    </div>
                    <div className={styles.student_log_date_time}>
                        <div className={styles.student_log}>
                            <h5 className={styles.attendance_log}>
                                <ClockIcon />
                                TIME OUT
                            </h5>
                            <h1 className={styles.student_log_time}>
                                07 : 19
                            </h1>
                        </div>
                        <div className={styles.student_log_date}>
                                February 09, 2025
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.student_list}>
                <div className="w-full flex justify-end pr-10">
                    <div className="bg-white p-3 w-fit rounded-full shadow-insideShadow flex justify-end gap-5">
                    {/* <HamburgerMenu /> */}
                        <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="w-8 h-8 flex flex-col justify-around items-center p-1"
                            >
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
                        </button>
                    </div>
                </div>
                <div className={styles.student_list_container}>

                </div>
            </div>
       </div>
    </section>
  )
}

export default StudentCheckIn