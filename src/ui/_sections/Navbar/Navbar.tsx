import { useEffect, useRef, useState } from "react";
import styles from "./styles/Navbar.module.css";
import Curve from "./components/Curve";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavFooter from "./components/NavFooter";
import { useNavigate } from "react-router-dom";
import { ROUTEPROPS } from "../../_routes/RouteProps";

const Navbar = () => {
  const navRef = useRef<HTMLElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  //  Move ROUTEPROPS usage inside useMemo to prevent early access
  const sampleMenu = [
    {
      label: "Dashboard",
      navigate: ROUTEPROPS.STUDENT_CHECKIN.path,
    },
    {
      label: "Settings",
      navigate: ROUTEPROPS.MANAGER.path,
    },
  ];

  useGSAP(() => {
    if (navRef.current) {
      if (isActive) {
        gsap.fromTo(
          navRef.current,
          {
            x: "100%",
            opacity: 1,
          },
          {
            x: "0%",
            duration: 0.8,
            ease: "power3.out",
            onStart: () => setIsButtonDisabled(true),
            onComplete: () => {
              setIsButtonDisabled(false);
            },
          }
        );
      } else {
        gsap.to(navRef.current, {
          x: "100%",
          duration: 0.8,
          opacity: 0,
          ease: "power3.out",
          onStart: () => setIsButtonDisabled(true),
          onComplete: () => {
            setIsActive(false);
            setIsButtonDisabled(false);
          },
        });
      }
    }
  }, [isActive, setIsActive]);

  // Function to close navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isActive &&
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  const handleFrameAction = (action: FrameWindowAction) => {
    if (action) {
      window.electron.sendFrameAction(action);
    }
  };

  return (
    <>
      <div className={styles.window_control_container}>
        <div className={styles.window_control}>
          <button
            className={styles.close_control}
            onClick={() => handleFrameAction("CLOSE")}
          />
          <button
            className={styles.minimize_control}
            onClick={() => handleFrameAction("MINIMIZE")}
          />
          <button
            className={styles.maximize_control}
            onClick={() => handleFrameAction("MAXIMIZE")}
          />
        </div>
      </div>
      <button
        ref={buttonRef}
        disabled={isButtonDisabled}
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="bg-white absolute top-10 right-10 p-3 w-fit rounded-full cursor-pointer shadow-insideShadow z-10 flex justify-end gap-5"
      >
        <div className="w-8 h-8 flex flex-col justify-around items-center p-1">
          <span
            className={`w-full h-[3px] bg-mightnightBlue rounded transition-transform duration-400 ${
              isActive ? "translate-y-[8px] rotate-45 bg-red-500" : ""
            }`}
          ></span>
          <span
            className={`w-3/5 h-1 bg-mightnightBlue rounded transition-all duration-400 ${
              isActive ? "opacity-0 w-0" : ""
            }`}
          ></span>
          <span
            className={`w-full h-[3px] bg-mightnightBlue rounded transition-transform duration-400 ${
              isActive ? "-translate-y-[8px] -rotate-45 bg-red-500" : ""
            }`}
          ></span>
        </div>
      </button>
      <nav ref={navRef} className={styles.menu}>
        <div className={styles.body}>
          <div className={styles.nav}>
            <div className={styles.header}>
              <p className={styles.nav_text}>Menu</p>
            </div>
            <menu className="text-3xl flex flex-col gap-4 h-full">
              {sampleMenu.map((item) => (
                <div
                  key={item.label}
                  onClick={() => {
                    navigate(item.navigate);
                    setIsActive(false);
                  }}
                >
                  <h5>{item.label}</h5>
                </div>
              ))}
            </menu>
            <NavFooter />
          </div>
        </div>
        <Curve isActive={isActive} />
      </nav>
    </>
  );
};

export default Navbar;
