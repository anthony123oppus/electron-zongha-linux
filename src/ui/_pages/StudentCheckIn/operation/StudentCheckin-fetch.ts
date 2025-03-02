import { useMutation } from "@tanstack/react-query";
import { StudentCheckInService } from "../../../_services";
import { Dispatch, SetStateAction } from "react";

export interface StudentInterface {
      created_at: string | null;
      first_name: string;
      grade_level: string;
      id: number;
      last_name: string;
      parent_contact: string;
      rfid_tag: string;
      section_id: number;
      status: number;
      updated_at: string | null;
      year_id: number;
}

export interface RfidResponseInterface {
    message: string;
    success: true;
    student: StudentInterface
}

interface StudentCheckInMutationProps {
    setStudentLog : Dispatch<SetStateAction<StudentInterface[]>>
}

export const StudentCheckInMutation = (props : StudentCheckInMutationProps) => {

    //Destructuirng Props
    const {setStudentLog} = props

    return useMutation({
        mutationKey : ["StudentCheckIn"],
        mutationFn : StudentCheckInService<RfidResponseInterface>,
        onSuccess : (data : ElectronSuccessResponseTypes<RfidResponseInterface>) => {
            if(data.data.success) {
                console.log(data, "data")
                setStudentLog(prevData => {
                    const updatedData = [data.data.student, ...prevData]; // Add new student at start
                    return updatedData.slice(0, 7);
                })
            }
        },
        onError : (error) => {
            console.log(error, "error")
        }
    })
}