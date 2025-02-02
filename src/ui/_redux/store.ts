import {configureStore} from "@reduxjs/toolkit"
import loaderSlice from "./loader.slice";

const store = configureStore({
    reducer : {
        loader : loaderSlice
    },
    devTools : true
});

export default store;