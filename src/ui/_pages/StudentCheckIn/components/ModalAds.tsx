import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { Dispatch, SetStateAction, useRef } from "react";
import { sampleVideo } from "../../../_utils/image-util";

interface ModalAdsProps {
  isInactive: boolean;
  setIsInactive: Dispatch<SetStateAction<boolean>>;
}

const ModalAds: React.FC<ModalAdsProps> = (props) => {
  const modalRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const { isInactive } = props;

  useGSAP(() => {
    if (modalRef.current) {
      if (isInactive) {
        gsap.fromTo(
          modalRef.current,
          {
            opacity: 0,
            scale: 0.8,
            y: 50,
          },
          {
            opacity: 1,
            scale: 1,
            display: "block",
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          }
        );
        if (videoRef.current) {
          videoRef.current.currentTime = 0; // Reset video to the beginning
          videoRef.current.play();
        }
      } else {
        gsap.to(modalRef.current, {
          opacity: 0,
          display: "none",
          scale: 0.8,
          y: 50,
          duration: 0.4,
          ease: "power3.in",
        });
      }
    }
  }, [isInactive]);

  return (
    <section
      ref={modalRef}
      className="absolute top-0 left-0 h-screen w-screen z-[100] bg-white hidden"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-fill"
        loop
        muted
        playsInline
        autoPlay
      >
        <source src={sampleVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default ModalAds;
