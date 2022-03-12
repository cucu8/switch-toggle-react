import { configureStore } from "@reduxjs/toolkit";
import mainSlice from "./mainSlice/mainSlice";

export const store = configureStore({
    reducer: {
        mainSlice,
    },
});