import styles from "./_styles/UserProfileCard.module.css";
import { UserProfileCard } from "./_components-props";


const UserprofileCard = (props : UserProfileCard) => {

    const {
        icon,
        label,
        value
    } = props

  return (
    <div className={styles.user_profile_card_container}>
      <h5 className={styles.user_profile_label}>
        {label}
      </h5>

      <div className={styles.user_profile_icon_container}>
        <div className={styles.user_profile_icon}>
            {icon}
          <h1 className={styles.user_profile_value}>
            {value}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default UserprofileCard;
