import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { sampleGetService, samplePostService } from "../../../_services";
import { Dispatch, SetStateAction } from "react";
import { CatFactReqTypes, PostResponse, TypePost } from "../../../App";
import { AppDispatch } from "../../../_redux/storeType";
import { loaderActions } from "../../../_redux/loader.slice";

interface UseGetSampleMutationProps {
  setCatFact: Dispatch<SetStateAction<string>>;
  dispatch: AppDispatch;
}

const useGetSampleMutation = ({
  setCatFact,
  dispatch,
}: UseGetSampleMutationProps) => {
  return useMutation({
    mutationKey: ["getSampleData"],
    mutationFn: sampleGetService<CatFactReqTypes>,
    onSuccess: (data: ElectronSuccessResponseTypes<CatFactReqTypes>) => {
      setCatFact(data.data.fact);
    },
    onError: (error) => {
      console.log(error, "error sa mutation");
      dispatch(loaderActions.setReset())
    },
    onMutate : () => {
      dispatch(loaderActions.setloading("Searching"))
    },
    onSettled : () => {
      dispatch(loaderActions.setReset())
    }
  });
};

const useGetSampleQuery = () => {
  return useSuspenseQuery({
    queryKey : ["getsamplequery"],
    queryFn : sampleGetService<CatFactReqTypes>,
  })
}

interface UsePostSampleMutationProps {
  setPostSample: Dispatch<SetStateAction<PostResponse | null>>;
}

const usePostSampleMutation = ({
  setPostSample,
}: UsePostSampleMutationProps) => {
  return useMutation({
    mutationKey: ["postSampleData"],
    mutationFn: samplePostService<TypePost, PostResponse>,
    onSuccess: (data: ElectronSuccessResponseTypes<PostResponse>) => {
      setPostSample(data.data);
    },
  });
};

export { useGetSampleMutation, usePostSampleMutation, useGetSampleQuery };
