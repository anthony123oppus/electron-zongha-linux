import { UseMutationResult } from "@tanstack/react-query";
import { RfidResponseInterface } from "../operation/StudentCheckin-fetch";
import { useEffect } from "react";

export const useRfidListener = (
  rfidMutate: UseMutationResult<
    ElectronSuccessResponseTypes<RfidResponseInterface>,
    Error,
    string
  >["mutate"]
) => {

    // USE EFFECT FOR RFID LISTENER
  useEffect(() => {
    let rfidNumber: string = "";

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        console.log("Sending Request With:", rfidNumber);
        if (rfidNumber !== "") {
          rfidMutate(rfidNumber);
          rfidNumber = "";
        }
      } else if (event.key.length === 1) {
        rfidNumber = rfidNumber + event.key;
      } else if (event.key === "Backspace") {
        rfidNumber = rfidNumber.slice(0, -1);
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [rfidMutate]);
};
