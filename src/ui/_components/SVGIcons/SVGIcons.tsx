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
