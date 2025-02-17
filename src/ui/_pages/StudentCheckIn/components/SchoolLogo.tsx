import { schoolLogo } from "../../../_utils/image-util";
import styles from "./_styles/SchoolLogo.module.css"

const SchoolLogo = () => {
  return (
    <div id="schoolLogo" className={styles.school_logo_container}>
      <img src={schoolLogo} alt="" className={styles.school_logo_img} />
      <h1 className={styles.school_logo}>Bohol Island State University</h1>
      <h5 className={styles.school_logo_address}>Zamora Bilar, Bohol</h5>
    </div>
  );
};

export default SchoolLogo;
