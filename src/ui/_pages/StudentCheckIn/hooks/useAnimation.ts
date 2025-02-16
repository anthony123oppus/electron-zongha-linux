import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export const useProfileAnim = () => {
  useGSAP(() => {
    gsap.from("#infoTag", {
      x: -40,
      ease: "power1.inOut",
      opacity: 0,
      stagger: {
        amount: 1,
      },
    });
  }, []);
};

export const useRecentStudentAnim = () => {
  useGSAP(() => {
    gsap.from("#recentStudent", {
      right : 30,
      ease: "power1.inOut",
      opacity : 0,
      stagger : {
        amount : 1
      }
    })
  }, [])
}

export const useSchoolLogo = () => {
  useGSAP(() => {
    gsap.from("#schoolLogo",{
      y : -60,
      duration : 0.6,
      ease : "power1.inOut",
      opacity : 0
    })
  }, [])
}
