import clsx from "clsx";
import { DividerLabelProps, POSITION } from "./Divider-props";


const Divider = (props: DividerLabelProps) => {
  const { 
    label, 
    position, 
    style 
} = props;

  const marginHandler = (position : string) => {

    if (position === POSITION.START) {
        return "mr-4"
    } else if (position === POSITION.END) {
        return "ml-4"
    } else{
        return "mx-4"
    }
  }


  return (
    <div className="flex items-center w-full">
      {position !== POSITION.START && (
        <div className={clsx("flex-grow border-white", style)} />
      )}
      <h5 className={clsx("text-white", marginHandler(position))}>{label}</h5>
      {position !== POSITION.END &&
        <div className={clsx("flex-grow border-white border-double", style)} />
      }
    </div>
  );
};

export default Divider;
