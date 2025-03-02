import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import {
  sampleDeleteService,
  sampleGetService,
  samplePatchService,
  samplePostService,
  samplePutService,
} from "../../../_services";
import { Dispatch, SetStateAction } from "react";
import { AppDispatch } from "../../../_redux/storeType";
import { loaderActions } from "../../../_redux/loader.slice";
import {
  CatFactReqTypes,
  PostResponse,
  PutResponse,
  TypePost,
  TypePut,
} from "../ManagerDashboard-props";

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
      console.log("Error in mutation:", error);
      dispatch(loaderActions.setReset());
    },
    onMutate: () => {
      dispatch(loaderActions.setloading("Searching"));
    },
    onSettled: () => {
      dispatch(loaderActions.setReset());
    },
  });
};

const useGetSampleQuery = () => {
  return useSuspenseQuery({
    queryKey: ["getsamplequery"],
    queryFn: sampleGetService<CatFactReqTypes>,
  });
};

interface UsePostSampleMutationProps {
  setPostSample: Dispatch<SetStateAction<PostResponse | PutResponse | null>>;
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

const usePutSampleMutation = ({
  setPostSample,
}: UsePostSampleMutationProps) => {
  return useMutation({
    mutationKey: ["putSampleData"],
    mutationFn: samplePutService<TypePut, PutResponse>,
    onSuccess: (data: ElectronSuccessResponseTypes<PutResponse>) => {
      setPostSample(data.data);
    },
  });
};

const usePatchSampleMutation = ({
  setPostSample,
}: UsePostSampleMutationProps) => {
  return useMutation({
    mutationKey: ["patchMutation"],
    mutationFn: samplePatchService<{ name: string }, PutResponse>,
    onSuccess: (data: ElectronSuccessResponseTypes<PutResponse>) => {
      setPostSample(data.data);
    },
  });
};

const useDeleteSampleMutation = () => {
  return useMutation({
    mutationKey: ["sampleDeleteRequest"],
    mutationFn: sampleDeleteService<{ message: string }>,
    onSuccess: (data: ElectronSuccessResponseTypes<{ message: string }>) => {
      console.log(data, "Data");
    },
  });
};

export {
  useGetSampleMutation,
  usePostSampleMutation,
  useGetSampleQuery,
  usePutSampleMutation,
  usePatchSampleMutation,
  useDeleteSampleMutation,
};
