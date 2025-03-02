import { QueryClient } from "@tanstack/react-query"

// FOR QUERYCLIENT
export const queryClient = new QueryClient();

// EXPORT ELECTRONWRAPPER
export * from "./electronApiWrapper"

// EXPORT SERVICE
export * from "./sample-service"
export * from "./StudentCheckIn-service"