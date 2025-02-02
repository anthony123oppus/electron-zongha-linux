import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface InitialLoaderStateTypes {
  isLoading: boolean;
  loadingText: string;
}

const initialLoaderState: InitialLoaderStateTypes = {
  isLoading: false,
  loadingText: "Fetching",
};

const loaderSlice = createSlice({
  name: "loader",
  initialState: initialLoaderState,
  reducers: {
    setloading: (
      state: InitialLoaderStateTypes,
      action: PayloadAction<string>
    ) => {
        state.isLoading = true;
        state.loadingText = action.payload;
    },
    setReset : (state) => {
        state.isLoading = false;
        state.loadingText = "Fetching";
    }
  },
});

export const loaderActions = loaderSlice.actions;

export default loaderSlice.reducer;
