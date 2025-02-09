import { useMutation } from "@tanstack/react-query";
import { sampleGetRfid } from "../../../_services";

interface SampleResponse {
  message: string;
  success: true;
  student: {
    created_at: string | null;
    first_name: string;
    grade_level: string;
    id: number;
    laat_name: string;
    parent_contact: string;
    rfid_tag: string;
    section_id: number;
    status: number;
    updated_at: string | null;
    year_id: number;
  };
}

export const useGetSampleRfid = () => {
  return useMutation({
    mutationKey: ["getsamplerfid"],
    mutationFn: sampleGetRfid<SampleResponse>,
    onSuccess: (data: ElectronSuccessResponseTypes<SampleResponse>) => {
      console.log(data);
    },
  });
};
