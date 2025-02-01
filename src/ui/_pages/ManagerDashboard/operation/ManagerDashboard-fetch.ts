import { useMutation } from "@tanstack/react-query";
import { sampleGetService, samplePostService } from "../../../_services";
import { Dispatch, SetStateAction } from "react";
import { CatFactReqTypes, PostResponse, TypePost } from "../../../App";

interface UseGetSampleMutationProps {
  setCatFact: Dispatch<SetStateAction<string>>;
}

const useGetSampleMutation = ({ setCatFact }: UseGetSampleMutationProps) => {
  return useMutation({
    mutationKey: ["getSampleData"],
    mutationFn: sampleGetService<CatFactReqTypes>,
    onSuccess: (data: ElectronSuccessResponseTypes<CatFactReqTypes>) => {
      setCatFact(data.data.fact);
    },
    onError : (error) => {
        console.log(error, "error sa mutation")
    }
  });
};

interface UsePostSampleMutationProps {
    setPostSample : Dispatch<SetStateAction<PostResponse | null>>
}

const usePostSampleMutation = ({setPostSample} : UsePostSampleMutationProps) => {
    return useMutation({
        mutationKey : ["postSampleData"],
        mutationFn : samplePostService<TypePost, PostResponse>,
        onSuccess : (data : ElectronSuccessResponseTypes<PostResponse>) => {
            setPostSample(data.data)
        }
    })
}

export { 
    useGetSampleMutation,
    usePostSampleMutation 
};
