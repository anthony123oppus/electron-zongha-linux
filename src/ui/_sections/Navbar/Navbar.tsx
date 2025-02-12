import { Dispatch, SetStateAction, useRef } from "react";
import styles from "./styles/Navbar.module.css";
import Curve from "./components/Curve";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavFooter from "./components/NavFooter";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
  setIsButtonDisabled: Dispatch<SetStateAction<boolean>>;
}

const sampleMenu = [
  {
    label: "Dashboard",
    navigate: "/",
  },
  {
    label: "Settings",
    navigate: "/",
  },
];

const Navbar = ({
  isActive,
  setIsActive,
  setIsButtonDisabled,
}: NavbarProps) => {
  const navRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate()

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

  return (
    <nav ref={navRef} className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p className={styles.nav_text}>Menu</p>
          </div>
          <menu className="text-3xl flex flex-col gap-4 h-full">
            {sampleMenu.map(item => (
              <div key={item.label} onClick={() => {navigate(item.navigate)}}>
                <h5>{item.label}</h5>
              </div>
            ))}
          </menu>
          <NavFooter />
        </div>
      </div>
      <Curve isActive={isActive} />
    </nav>
  );
};

export default Navbar;
