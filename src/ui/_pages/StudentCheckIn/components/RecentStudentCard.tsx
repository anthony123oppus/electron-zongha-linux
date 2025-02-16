import { NameSVGIcon } from "../../../_components/SVGIcons/SVGIcons";
import { GENDERENUM } from "../../../_globalTypes/GlobalTypes";
import { RecentStudentCardProps } from "./_components-props";
import styles from "./_styles/RecentStudentCard.module.css"

const RecentStudentCard = (props: RecentStudentCardProps) => {
  // Destructing Props
  const { id, student } = props;

  return (
    <div
      id={id}
      className={styles.recent_student_container}
    >
      <img
        src={student.image}
        alt="Second Student"
        className={styles.recent_student_image}
      />
      <NameSVGIcon gender={student.gender} />
      <div
        className={`h-12 relative z-1 px-4 -translate-y-3 ${
          student.gender === GENDERENUM.FEMALE ? "text-white" : "text-black"
        }`}
      >
        <h5 className={styles.recent_student_lastname}>
          {student.lastName},
        </h5>
        <h5 className="font-semibold ">{`${
          student.firstName
        } ${student.middleInitial.charAt(0).toUpperCase()}.`}</h5>
      </div>
    </div>
  );
};

export default RecentStudentCard;
