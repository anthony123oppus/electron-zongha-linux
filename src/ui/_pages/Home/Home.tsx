import styles from "./styles/Home.module.css";
import { studentImage, circleImage, schoolLogo } from "../../_utils/image-util";

const Home = () => {
  return (
    <section className={styles.homeContainer}>
      <div className="h-[70vh] flex justify-center">
        <div className="w-[28%] flex flex-col pt-16 gap-2">
          <h1 className="text-2xl font-semibold text-center">Student Information</h1>

          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-2">
              <h3 className="bg-pink-600  px-4 text-white font-inter">Name</h3>
              <div className=" pl-6">
                <h1 className="font-inter italic text-5xl font-bold">
                  Bautista,
                </h1>
                <h5 className="font-lexend font-semibold text-2xl">
                  Nathalie O.
                </h5>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="bg-pink-600 w-full px-4 text-white font-inter">Year & Section</h3>
              <div className=" pl-6">
                <h1 className="font-inter italic text-xl font-bold">
                  Grade 9 - Grasshopper
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="bg-pink-600 px-4 text-white font-inter">Gender</h3>
              <div className=" pl-6">
                <h1 className="font-inter italic text-xl font-bold">
                  Female
                </h1>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="bg-pink-600 px-4 text-white font-inter">Student ID</h3>
              <div className=" pl-6">
                <h1 className="font-inter text-xl font-bold">
                  2025-19882993
                </h1>
              </div>
            </div>

          </div>

        </div>
        <div className="w-[44%] flex relative justify-center items-center pb-9">
          <img
            src={schoolLogo}
            alt="school logo"
            className={styles.schoolLogoImage}
          />
          <img
            src={circleImage}
            alt="hero bg"
            className={styles.circleHeroImage}
          />
          <img
            src={studentImage}
            alt="lat student"
            className={styles.lastLogImage}
          />
        </div>
        <div className="bg-green-500 w-[28%]">hhd</div>
      </div>
      <div className="h-[30vh] bg-red-200 flex gap-5 overflow-y-auto">
        <div className="flex gap-5">
          <div className="w-[200px] bg-black/40">jj</div>
          <div className="w-[200px] bg-slate-100">jj</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
