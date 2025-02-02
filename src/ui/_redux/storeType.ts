import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector } from 'react-redux';
import store from "./store";

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useReduxDispatch<AppDispatch>();

export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;