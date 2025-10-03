import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "../features/JobSlice";

export const store = configureStore({
    reducer: {
        jobdata: jobReducer,
    }
});