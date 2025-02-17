import styles from "./styles/Home.module.css";
import { circleImage, schoolLogo, studentImage } from "../../_utils/image-util";
import { useEffect } from "react";
import { useGetSampleRfid } from "./_operation/Home-fetch";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../../_sections/Layout/DefaultLayout";

const Home = () => {

  const {mutate} = useGetSampleRfid()
  const navigate = useNavigate()

  useEffect(() => {

    let text = "";

    const handleKeyDown = (event : KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("Sending request with:", text);
        if(text !== "") {
          mutate(text)
          // sendRequest(text);
          text = ""
        }
      } else if (event.key.length === 1) {
        text = text + event.key;
      } else if (event.key === "Backspace") {
        text = text.slice(0, -1);
      }
    }

    window.addEventListener("keydown", handleKeyDown)
  }, [mutate])

  return (
    <DefaultLayout>
      <section className={styles.homeContainer}>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        </div>
        <div className="h-[70vh] flex justify-center">
          <div className="w-[28%] h-fit py-10 flex flex-col mt-8 gap-2 text-white bg-white/20 backdrop-blur-[10px] border-white border-[1px] rounded-xl">
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
        <div onClick={() => navigate("student-checkIn")} className="text-white z-[1000] cursor-pointer">Student Checkin</div>
        </div>
        <div className="h-[30vh] flex gap-5 overflow-y-auto">
          <div className="flex gap-5">
            <div className="w-[200px] ">jj</div>
            <div className="w-[200px] ">jj</div>
          </div>
        </div>
        {/* <div className="w-full h-full flex ">
          <div className="w-1/3  h-full px-6 py-3 relative">
            <div className="relative h-full w-full border border-white bg-black/10 backdrop-blur-[20px] rounded-[10px] overflow-hidden">
              <svg
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-[700px] rotate-[240deg] left-[-130px] bottom-[-200px]"
              >
                <path
                  fill="#0F62FE"
                  d="M40.4,-68.8C52.2,-63.1,61.4,-52,65.7,-39.6C69.9,-27.2,69.2,-13.6,70,0.5C70.8,14.5,73.1,29,67,38.3C61,47.6,46.6,51.7,34,57.6C21.5,63.4,10.7,71.1,0.1,70.8C-10.4,70.6,-20.9,62.4,-30.4,54.8C-40,47.2,-48.6,40.1,-55.9,31.1C-63.3,22,-69.3,11,-70.9,-0.9C-72.4,-12.8,-69.5,-25.6,-64.3,-38.4C-59.1,-51.2,-51.7,-63.9,-40.6,-70C-29.5,-76,-14.8,-75.4,-0.2,-75C14.3,-74.6,28.6,-74.5,40.4,-68.8Z"
                  transform="translate(100 100)"
                />
              </svg>
              <img src={studentImage} alt="" className={styles.lastLogImage} />
            </div>
          </div>
          <div className="w-[70%] h-full flex flex-wrap justify-center items-center gap-x-6">
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
            <div className="h-[46%] w-[30%] bg-yellow-500"></div>
          </div>
        </div> */}
      </section>
    </DefaultLayout>
  );
};

export default Home;
