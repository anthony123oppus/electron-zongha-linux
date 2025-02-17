import { GENDERENUM } from "../../_globalTypes/GlobalTypes";
import styles from "./SVGIcons.module.css";

export const ClockIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Solid Clock Background */}
      <circle
        cx="25"
        cy="25"
        r="23"
        fill="#041c40"
        stroke="#041c40"
        strokeWidth="2"
      />

      {/* Clock Center */}
      <circle cx="25" cy="25" r="2" fill="white" />

      {/* Hour Hand */}
      <rect
        x="24"
        y="16"
        width="2"
        height="12"
        fill="white"
        transform-origin="25px 25px"
        className={styles.hour_hand}
      />

      {/* Minute Hand */}
      <rect
        x="24.5"
        y="10"
        width="1.5"
        height="17"
        fill="white"
        transform-origin="25px 25px"
        className={styles.minute_hand}
      />
    </svg>
  );
};

export const FullNameIcon = () => {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="p-3 rounded-full h-full bg-mightnightBlue relative z-30"
    >
      <circle cx="12" cy="8" r="4" stroke="white" strokeWidth="2" />
      <path
        d="M4 20C4 16.6863 7.13401 14 12 14C16.866 14 20 16.6863 20 20"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <rect x="3" y="21" width="18" height="2" fill="white" />
    </svg>
  );
};

export const HamburgerMenu = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="stroke-[#041c40] transition-all duration-300 ease-in-out"
    >
      {/* Top Line */}
      <line
        x1="3"
        y1="6"
        x2="21"
        y2="6"
        strokeWidth="2"
        className={`transition-transform duration-300`}
      />
      {/* Middle Line (Hidden When Open) */}
      <line
        x1="3"
        y1="12"
        x2="21"
        y2="12"
        strokeWidth="2"
        className={`transition-opacity duration-300`}
      />
      {/* Bottom Line */}
      <line
        x1="3"
        y1="18"
        x2="21"
        y2="18"
        strokeWidth="2"
        className={`transition-transform duration-300`}
      />
    </svg>
  );
};

interface NameSVGIconProps {
  gender: GENDERENUM.FEMALE | GENDERENUM.MALE;
}

export const NameSVGIcon = (props: NameSVGIconProps) => {
  const { gender } = props;

  return (
    <>
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
          fill={gender === GENDERENUM.MALE 
                  ? "#1AD1FF" 
                  : "#FF0066"
                }
          d="M38.5,-49.5C53.5,-50.3,71.7,-45.7,79.3,-34.6C86.8,-23.5,83.7,-6,75.5,6.8C67.3,19.5,54.1,27.4,44.1,37.3C34.2,47.2,27.5,59.1,19.4,57.7C11.3,56.3,1.7,41.6,-6.6,33.9C-14.8,26.2,-21.7,25.5,-35.3,23.2C-48.9,20.8,-69.2,16.8,-77,6.9C-84.9,-3,-80.4,-18.8,-73.1,-32.8C-65.8,-46.8,-55.8,-59,-43.1,-59.3C-30.5,-59.5,-15.2,-47.8,-1.7,-45.1C11.8,-42.4,23.5,-48.6,38.5,-49.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </>
  );
};
